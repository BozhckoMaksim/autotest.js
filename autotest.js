const jsonData = pm.response.json();
pm.test("Test data type of the response", () => {
  pm.expect(jsonData).to.be.an("object");
  });
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200]);
});
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});
pm.test("date", function () {
    pm.response.to.have.header("date");
});

pm.test("Status code name has OK", function () {
    pm.response.to.have.status("OK");
});

pm.test("Obi-Wan Kenobi", function () {
    pm.expect(pm.response.text()).to.include("Obi-Wan Kenobi");
  });

pm.test("Cookie is present", () => {
  pm.expect(pm.cookies.has()).to.be.false;
});

pm.test("starships", function () {
    pm.expect(pm.response.text()).to.include("https://swapi.dev/api/starships/48/");
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});



