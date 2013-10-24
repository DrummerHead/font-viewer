# This script depends on Apple Font Tool Suite command tools
# get it at https://developer.apple.com/fonts/
#
# The script will use ftxinstalledfonts' output to create a
# JS array of all the installed font's families
# that will get written to ./js/fileList.js


raw_font_list = %x[ftxinstalledfonts -fiM]

families = raw_font_list
  .gsub(/^[^\t]*\t([^\t]*)\t[^\t]*\t(.*)/, '{family : "\2", fixed : \1},')
  .gsub('no', 'false')
  .gsub('YES', 'true')

families_array = families
  .gsub(/(.*)(,)/m, '\1]')
  .lines
  .drop(1)
  .uniq
  .reduce(:+)
  .insert(0, 'var fontList = [')

File.open('./js/fileList.js', 'w') do |file|
  file.write(families_array)
end

puts "\nFont list file written at ./js/fileList\n\n"
