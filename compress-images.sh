for file in *.jpg; do
	magick "$file" -resize 600x400 -strip -quality 80 "$file"-compressed.jpg
	rm "$file"
done
