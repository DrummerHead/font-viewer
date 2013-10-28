# This script depends on Apple Font Tool Suite command tools
# get it at https://developer.apple.com/fonts/
#
# The script will use ftxinstalledfonts' output to create a
# JS array of all the installed font's families
# that will get written to ./js/data/fontList.json


raw_font_list = %x[ftxinstalledfonts -fiM]

jsoned_lines = raw_font_list
  .gsub(/^[^\t]*\t([^\t]*)\t[^\t]*\t(.*)/, '{~id~"family" : "\2", "fixed" : \1},')
  .gsub('no', 'false')
  .gsub('YES', 'true')

families_array = jsoned_lines
  .lines
  .drop(1)
  .uniq
  .each_with_index do |line, i|
    line.gsub!("~id~","\"id\" : #{i}, ")
  end

families_json = families_array
  .reduce(:+)
  .gsub(/(.*)(,)/m, '\1]')
  .insert(0, '[')

File.open('./js/data/fontList.json', 'w') do |file|
  file.write(families_json)
end

puts "\nFont list file written at ./js/data/fontList.json\n\n"
