document.getElementById("generate").addEventListener("click", function() {
    var template = document.getElementById("template").value;
    var v1 = document.getElementById("v1").value;
    var v2 = document.getElementById("v2").value;
    var v3 = document.getElementById("v3").value;
    var v4 = document.getElementById("v4").value;
    var v5 = document.getElementById("v5").value;
    var v6 = document.getElementById("v6").value;
    var v7 = document.getElementById("v7").value;
    var v8 = document.getElementById("v8").value;
    var v9 = document.getElementById("v9").value;
    var v10 = document.getElementById("v10").value;
    var result = template
      .replace("[v1]", v1)
      .replace("[v2]", v2)
      .replace("[v3]", v3)
      .replace("[v4]", v4)
      .replace("[v5]", v5)
      .replace("[v6]", v6)
      .replace("[v7]", v7)
      .replace("[v8]", v8)
      .replace("[v9]", v9)
      .replace("[v10]", v10);
    document.getElementById("result").value = result })
  