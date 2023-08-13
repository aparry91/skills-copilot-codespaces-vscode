function skillsMember() {
    var member = {
        name: "John Doe",
        age: 30,
        skills: ["JS", "React", "Node"],
        address: {
            street: "123 Main St",
            city: "Miami",
            state: "FL"
        },
        getBirthYear: function() {
            return 2017 - this.age;
        }
    };
    return member;
}