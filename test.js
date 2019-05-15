const spoofysearch = require('./index');
var assert = require('assert');

describe("HelperFunctions", function() {
  describe('#sol()', function() {
    it('should return a string of the length specified', function() {
      assert.equal(sol(0).length, 0);
      assert.equal(sol(3).length, 3);
      assert.equal(sol(62).length, 62);
    });
  });
});

describe('SpoofySearch', function() {
  describe('#place_prefix()', function() {
    it('should not work for strings shorter than 4 characters', function() {
      var worked = 0;

      // Should fail
      try {
        spoofysearch.place_prefix("");
        worked++;
      } catch (error) { }

      // Should fail
      try {
        spoofysearch.place_prefix("A");
        worked++;
      } catch (error) { }

      // Should fail
      try {
        spoofysearch.place_prefix("AB");
        worked++;
      } catch (error) { }

      // Should fail
      try {
        spoofysearch.place_prefix("ABC");
        worked++;
      } catch (error) { }

      // Should work
      try {
        spoofysearch.place_prefix("ABCD");
        worked++;
      } catch (error) { }

      assert.equal(worked, 1);
    });
    it('should not work for strings that are exactly 63 characters', function() {
      var worked = false;
      try {
        place_prefix("123456789123456789123456789123456789123456789123456789123456789");
        worked = true;
      } catch (error) { }
      assert.equal(worked, false);
    });
    it('should not work for strings that are more than 73 characters', function() {
      var worked = 0;

      // This is 73 characters -- should work
      try {
        spoofysearch.place_prefix("1234567891234567891234567891234567891234567891234567891234567891234567891");
        worked++;
      } catch (error) { }

      // This is 74 characters -- should not work
      try {
        spoofysearch.place_prefix("12345678912345678912345678912345678912345678912345678912345678912345678912");
        worked++;
      } catch (error) { }

      assert.equal(worked, 1);
    });
    it('should return the proper characters described in the spec table', function() {
      
      // Test the capitals explicitely
      assert.equal(spoofysearch.place_prefix("four"), "E");
      assert.equal(spoofysearch.place_prefix("five5"), "F");
      assert.equal(spoofysearch.place_prefix("six666"), "G");
      assert.equal(spoofysearch.place_prefix("seven77"), "H");
      assert.equal(spoofysearch.place_prefix("eight888"), "I");
      assert.equal(spoofysearch.place_prefix("nine99999"), "J");
      assert.equal(spoofysearch.place_prefix("ten10ten10"), "K");
      assert.equal(spoofysearch.place_prefix("11eleven11e"), "L");
      assert.equal(spoofysearch.place_prefix("twelve121212"), "M");
      assert.equal(spoofysearch.place_prefix("thirteen1313t"), "N");
      assert.equal(spoofysearch.place_prefix("fourteen141414"), "O");
      assert.equal(spoofysearch.place_prefix("fifteen15151515"), "P");
      assert.equal(spoofysearch.place_prefix("sixteen16161616s"), "Q");
      assert.equal(spoofysearch.place_prefix("seventeen17171717"), "R");
      assert.equal(spoofysearch.place_prefix("eighteen1818181818"), "S");
      assert.equal(spoofysearch.place_prefix("nineteen1919191919n"), "T");
      assert.equal(spoofysearch.place_prefix("twenty20202020202020"), "U");
      assert.equal(spoofysearch.place_prefix("twentyone212121212121"), "V");
      assert.equal(spoofysearch.place_prefix("twentytwo2222222222222"), "W");
      assert.equal(spoofysearch.place_prefix("twentythree232323232323"), "X");
      assert.equal(spoofysearch.place_prefix("twentyfour24242424242424"), "Y");
      assert.equal(spoofysearch.place_prefix("twentyfive25252525252525t"), "Z");
      
      // Test the lower case ones
      assert.equal(spoofysearch.place_prefix(sol(26)), "a");
      assert.equal(spoofysearch.place_prefix(sol(27)), "b");
      assert.equal(spoofysearch.place_prefix(sol(28)), "c");
      assert.equal(spoofysearch.place_prefix(sol(29)), "d");
      assert.equal(spoofysearch.place_prefix(sol(30)), "e");
      assert.equal(spoofysearch.place_prefix(sol(31)), "f");
      assert.equal(spoofysearch.place_prefix(sol(32)), "g");
      assert.equal(spoofysearch.place_prefix(sol(33)), "h");
      assert.equal(spoofysearch.place_prefix(sol(34)), "i");
      assert.equal(spoofysearch.place_prefix(sol(35)), "j");
      assert.equal(spoofysearch.place_prefix(sol(36)), "k");
      assert.equal(spoofysearch.place_prefix(sol(37)), "l");
      assert.equal(spoofysearch.place_prefix(sol(38)), "m");
      assert.equal(spoofysearch.place_prefix(sol(39)), "n");
      assert.equal(spoofysearch.place_prefix(sol(40)), "o");
      assert.equal(spoofysearch.place_prefix(sol(41)), "p");
      assert.equal(spoofysearch.place_prefix(sol(42)), "q");
      assert.equal(spoofysearch.place_prefix(sol(43)), "r");
      assert.equal(spoofysearch.place_prefix(sol(44)), "s");
      assert.equal(spoofysearch.place_prefix(sol(45)), "t");
      assert.equal(spoofysearch.place_prefix(sol(46)), "u");
      assert.equal(spoofysearch.place_prefix(sol(47)), "v");
      assert.equal(spoofysearch.place_prefix(sol(48)), "w");
      assert.equal(spoofysearch.place_prefix(sol(49)), "x");
      assert.equal(spoofysearch.place_prefix(sol(50)), "y");
      assert.equal(spoofysearch.place_prefix(sol(51)), "z");

      // Test the numeric ones
      assert.equal(spoofysearch.place_prefix(sol(52)), "0");
      assert.equal(spoofysearch.place_prefix(sol(53)), "1");
      assert.equal(spoofysearch.place_prefix(sol(54)), "2");
      assert.equal(spoofysearch.place_prefix(sol(55)), "3");
      assert.equal(spoofysearch.place_prefix(sol(56)), "4");
      assert.equal(spoofysearch.place_prefix(sol(57)), "5");
      assert.equal(spoofysearch.place_prefix(sol(58)), "6");
      assert.equal(spoofysearch.place_prefix(sol(59)), "7");
      assert.equal(spoofysearch.place_prefix(sol(60)), "8");
      assert.equal(spoofysearch.place_prefix(sol(61)), "9");
      assert.equal(spoofysearch.place_prefix(sol(62)), "-");

      // Test the other capital ones
      assert.equal(spoofysearch.place_prefix(sol(64)), "A");
      assert.equal(spoofysearch.place_prefix(sol(65)), "B");
      assert.equal(spoofysearch.place_prefix(sol(66)), "C");
      assert.equal(spoofysearch.place_prefix(sol(67)), "D");
      assert.equal(spoofysearch.place_prefix(sol(68)), "E");
      assert.equal(spoofysearch.place_prefix(sol(69)), "F");
      assert.equal(spoofysearch.place_prefix(sol(70)), "G");
      assert.equal(spoofysearch.place_prefix(sol(71)), "H");
      assert.equal(spoofysearch.place_prefix(sol(72)), "I");
      assert.equal(spoofysearch.place_prefix(sol(73)), "J");

    })
  });
  describe("#query_string()", function() {
    it("should return the properly formatted url", function() {
      assert.equal(
        spoofysearch.query_string("bread", "Mazeuil,Poitou-Charentes,France"),
        "https://www.google.com/search?q=bread&uule=w+CAIQICIfTWF6ZXVpbCxQb2l0b3UtQ2hhcmVudGVzLEZyYW5jZQ"  
      )

      assert.equal(
        spoofysearch.query_string("bread basket", "Orvault,Pays de la Loire,France"),
        "https://www.google.com/search?q=bread%20basket&uule=w+CAIQICIfT3J2YXVsdCxQYXlzIGRlIGxhIExvaXJlLEZyYW5jZQ"  
      )

      assert.equal(
        spoofysearch.query_string("something", "Nantes,Pays de la Loire,France"),
        "https://www.google.com/search?q=something&uule=w+CAIQICIeTmFudGVzLFBheXMgZGUgbGEgTG9pcmUsRnJhbmNl"  
      )

    });
  });
});

function sol(length) {
  var str = "";
  for(var i = 0; i < length; i++) {
    str += ".";
  }
  return str;
}