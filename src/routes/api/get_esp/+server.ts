import { googleDocsToMarkdown } from "docs-markdown";
import { text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { google } from 'googleapis';

import { ESP_DOCUMENT_ID, GOOGLE_REFRESH_TOKEN, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$app/env/private';

export const GET: RequestHandler = async ({ url }) => {
    const tabIndex = Number(url.searchParams.get('tab'));
    const auth = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);

    auth.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

    const docs = google.docs({version: 'v1', auth});
    const doc = await docs.documents.get({ documentId: ESP_DOCUMENT_ID, includeTabsContent: true });

    const tabs = doc.data.tabs ?? [];
    const tab = tabs[tabIndex];

    return text(googleDocsToMarkdown({
        title: doc.data.title,
        revisionId: doc.data.revisionId,
        suggestionsViewMode: doc.data.suggestionsViewMode,
        documentId: ESP_DOCUMENT_ID,
        ...tab.documentTab,
    }).replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, ''));
};