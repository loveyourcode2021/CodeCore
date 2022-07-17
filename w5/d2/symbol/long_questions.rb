=begin
Given an array of questions like this:

1 | questions = ["What is your name", "How are you?", "Is that right?", "Are you John?", "How is everything?"]


Generate an array of questions whose total character count is greater than 15.

Bonus: Do it in two ways, one of them using select method for Ruby Arrays.
=end

questions = ["What is your name", "How are you?", "Is that right?", "Are you John?", "How is everything?"]
questions.select |n| 
    if(n.length > 15)
        p n
        break
end
