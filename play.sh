folder_path="packages/demo/src/lib"

# Change extension of all JavaScript files in the folder to .jsx
for file in "$folder_path"/*.js; do
    if [[ -f "$file" ]]; then
        mv -- "$file" "${file%.js}.jsx"
    fi
done

echo "Extension conversion completed."