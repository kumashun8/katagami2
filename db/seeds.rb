5.times do
  Member.create(
    name: SecureRandom.hex(4),
    age: rand(80)
  )
end
