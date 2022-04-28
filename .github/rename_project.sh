#!/usr/bin/env bash
while getopts a:n:u:d flag; do
  case "${flag}" in
  a) author=${OPTARG} ;;
  n) name=${OPTARG} ;;
  u) urlname=${OPTARG} ;;
  d) description=${OPTARG} ;;
  esac
done

echo "Author: $author"
echo "Project Name: $name"
echo "Project URL name: $urlname"
echo "Description: $description"

echo "Renaming project..."

original_author="MarkRabey"
original_name="react-github-stats"
original_urlname="react-github-stats"
original_description=""

for filename in $(git ls-files); do
  sed -i "s/$original_author/$author/g" $filename
  sed -i "s/$original_name/$name/g" $filename
  sed -i "s/$original_urlname/$urlname/g" $filename
  sed -i "s/$original_description/$description/g" $filename
  echo "Renamed $filename"
done

mv react-github-stats $name

rm -rf .github/template.yml
