sentence = gets.chomp

new_sentence = sentence.split(' ').map.with_index do |word, index|
  if index % 2 == 0
    word.upcase!
  else
    word.downcase!
  end
end

p new_sentence.join(' ')

a = [
  ['john', 'steve', 'jen'],
  ['ate', 'sat on', 'bought'],
  ['an apple', 'the couch', 'a toothbrush']
]

puts a.map{ |words| words.sample}.join(" ")

movies_with_directors = {
  "Forrest Gump" => "Robert Zemeckis",
  "The Matrix" => "The Watchowskis",
  "Pulp Fiction" => "Quentin Tarintino",
  :Zero_Dark_Thirty => "Kathryn Bigelow"
}

p movies_with_directors

# .each works just like arrays. but takes two arguments for key and value
# it expects a block of code with 2 arguments
movies_with_directors.each do |key, value|
  puts "#{key}'s director is #{value}"
end