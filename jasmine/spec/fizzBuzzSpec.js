describe("FizzBuzz", function() {
  it("returns 'fizz' for numbers divisible by 3", function() {
    expect(fizzbuzz(3)).toEqual("fizz");
  });

  it("does not return 'fizz' for numbers not divisible by 3", function() {
    expect(fizzbuzz(4)).not.toEqual("fizz");
  });

  it("returns 'buzz' for numbers divisible by 5", function() {
    expect(fizzbuzz(5)).toEqual("buzz");
    expect(fizzbuzz(10)).toEqual("buzz");
  });

  it("does not return 'buzz' for numbers not divisible by 5", function() {
    expect(fizzbuzz(3)).not.toEqual("buzz");
  });

  it("returns 'fizzbuzz' for numbers divisible by 3 and 5", function() {
    expect(fizzbuzz(15)).toEqual("fizzbuzz");
  });

});
