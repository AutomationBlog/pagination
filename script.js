// if you have any suggestion of questions, pleasse feel free to send me an email to chiholiu10@gmail.com

(function() {
    "use strict";

    function Pagination() {
      
       const objJson = [
         {
           id: "1",
           name: "Lura Senger",
           email: "Xander_Collier@yahoo.com",
         },
         {
           id: "2",
           name: "Wilburn Weber",
           email: "Bennett_Kreiger11@yahoo.com",
         },
         {
           id: "3",
           name: "Tyrique Hahn",
           email: "Juston.Altenwerth@yahoo.com",
         },
         {
           id: "4",
           name: "Lenny Bailey",
           email: "Guiseppe_Hegmann@yahoo.com",
         },
         {
           id: "5",
           name: "Vladimir Keeling",
           email: "Louisa_Walsh18@hotmail.com",
         },
         {
           id: "6",
           name: "Kellie Crona",
           email: "Chandler_Abernathy@yahoo.com",
         },
         {
           id: "7",
           name: "Carolina White",
           email: "Royal50@hotmail.com",
         },
         {
           id: "8",
           name: "Alfredo Conn",
           email: "Clarabelle34@hotmail.com",
         },
         {
           id: "9",
           name: "Stan Shanahan",
           email: "Lamar.McClure@hotmail.com",
         },
         {
           id: "10",
           name: "Marvin Fay",
           email: "Osbaldo58@hotmail.com",
         },
         {
           id: "11",
           name: "Torrance Rau",
           email: "Orin45@gmail.com",
         },
         {
           id: "12",
           name: "Harold Gutmann MD",
           email: "Alyce.Stracke37@yahoo.com",
         },
         {
           id: "13",
           name: "Taryn Torphy",
           email: "Dean_Breitenberg71@hotmail.com",
         },
         {
           id: "14",
           name: "Bryana Lang",
           email: "Tatum.Ullrich@yahoo.com",
         },
         {
           id: "15",
           name: "Nyasia Green DDS",
           email: "Dino83@gmail.com",
         },
         {
           id: "16",
           name: "Nasir Gerhold",
           email: "Lilian_Bashirian8@hotmail.com",
         },
         {
           id: "17",
           name: "Raymundo Ritchie PhD",
           email: "Antwan.Schoen15@yahoo.com",
         },
         {
           id: "18",
           name: "Delmer Marvin",
           email: "Kiera62@yahoo.com",
         },
         {
           id: "19",
           name: "Rachel Wilkinson",
           email: "Foster_Conroy@gmail.com",
         },
         {
           id: "20",
           name: "Gladys Howell",
           email: "Constance.Labadie10@yahoo.com",
         },
         {
           id: "21",
           name: "Ciara Klocko",
           email: "Harvey76@yahoo.com",
         },
         {
           id: "22",
           name: "Quentin O'Kon",
           email: "Amely_Cummings2@yahoo.com",
         },
         {
           id: "23",
           name: "Ms. Gabriella Kunde",
           email: "Lorenza_Cummerata@hotmail.com",
         },
         {
           id: "24",
           name: "Gerald Reilly",
           email: "Lia_Konopelski@gmail.com",
         },
         {
           id: "25",
           name: "Brody Carter I",
           email: "Colten.Wilderman90@hotmail.com",
         },
         {
           id: "26",
           name: "Alanis Klocko",
           email: "Johathan.Champlin69@gmail.com",
         },
         {
           id: "27",
           name: "Caroline Miller",
           email: "Delaney.Kozey74@gmail.com",
         },
         {
           id: "28",
           name: "Ms. Merritt McClure",
           email: "Wendy.Zieme@gmail.com",
         },
         {
           id: "29",
           name: "Jovani Schoen",
           email: "Norval_Zieme@hotmail.com",
         },
         {
           id: "30",
           name: "Berniece Bradtke",
           email: "Okey.Fisher39@hotmail.com",
         },
         {
           id: "31",
           name: "Hanna Gottlieb",
           email: "Edna62@hotmail.com",
         },
         {
           id: "32",
           name: "Christiana Bergnaum",
           email: "Donnie.Paucek22@gmail.com",
         },
         {
           id: "33",
           name: "Reid Stehr",
           email: "Hiram69@gmail.com",
         },
         {
           id: "34",
           name: "Evans Ward",
           email: "Liliane72@hotmail.com",
         },
         {
           id: "35",
           name: "Miss Enos Davis",
           email: "Kolby.Grady@hotmail.com",
         },
         {
           id: "36",
           name: "Mathew Lueilwitz",
           email: "Mariah.Hagenes@yahoo.com",
         },
         {
           id: "37",
           name: "Romaine Robel",
           email: "Sheila19@yahoo.com",
         },
         {
           id: "38",
           name: "Immanuel Aufderhar",
           email: "Aileen32@hotmail.com",
         },
         {
           id: "39",
           name: "Julius Reilly Jr.",
           email: "Santa89@yahoo.com",
         },
         {
           id: "40",
           name: "Linnea Borer",
           email: "Jarrett_Hegmann2@hotmail.com",
         },
         {
           id: "41",
           name: "Misael Abernathy IV",
           email: "Robbie42@yahoo.com",
         },
         {
           id: "42",
           name: "Mr. Gerda Jerde",
           email: "Gustave36@hotmail.com",
         },
         {
           id: "43",
           name: "Easton Daugherty",
           email: "Malcolm.Schuster11@hotmail.com",
         },
         {
           id: "44",
           name: "Leanna Gutkowski",
           email: "Chelsea9@gmail.com",
         },
         {
           id: "45",
           name: "Rollin Trantow",
           email: "Marques_Hickle26@gmail.com",
         },
         {
           id: "46",
           name: "Heaven Luettgen",
           email: "Lonnie.Greenfelder95@hotmail.com",
         },
         {
           id: "47",
           name: "Gilda Huel",
           email: "Stephania.Hintz@gmail.com",
         },
         {
           id: "48",
           name: "Javon Walker",
           email: "Lamar_Bailey39@yahoo.com",
         },
         {
           id: "49",
           name: "Stewart King",
           email: "Chasity_Jenkins82@gmail.com",
         },
         {
           id: "50",
           name: "Cortez Lueilwitz",
           email: "Lelia.Mitchell43@gmail.com",
         },
         {
           id: "51",
           name: "Ora Kilback",
           email: "Matt25@gmail.com",
         },
         {
           id: "52",
           name: "Lera Macejkovic",
           email: "Jamal.Donnelly45@hotmail.com",
         },
         {
           id: "53",
           name: "Asa Gottlieb",
           email: "Carolyne.Langosh@yahoo.com",
         },
         {
           id: "54",
           name: "Avery Nienow",
           email: "Hudson_Bernhard47@yahoo.com",
         },
         {
           id: "55",
           name: "Dr. Katrine Ryan",
           email: "Colten40@gmail.com",
         },
         {
           id: "56",
           name: "Florida Kulas",
           email: "Alejandra_Bernhard@yahoo.com",
         },
         {
           id: "57",
           name: "Mauricio Gerlach",
           email: "Vincenza_Gusikowski84@hotmail.com",
         },
         {
           id: "58",
           name: "Chadrick Simonis",
           email: "Reymundo.Doyle@gmail.com",
         },
         {
           id: "59",
           name: "Beau Jenkins",
           email: "Cletus65@hotmail.com",
         },
         {
           id: "60",
           name: "Camilla Cole",
           email: "Eda48@yahoo.com",
         },
         {
           id: "61",
           name: "Abagail MacGyver",
           email: "Jevon.Koch@hotmail.com",
         },
         {
           id: "62",
           name: "Ludwig Prohaska",
           email: "Eldon_DuBuque37@yahoo.com",
         },
         {
           id: "63",
           name: "Berenice Hane",
           email: "Lonnie3@gmail.com",
         },
         {
           id: "64",
           name: "Abel Durgan",
           email: "Marlee.Weimann42@gmail.com",
         },
         {
           id: "65",
           name: "Tate Kuhlman",
           email: "Hope31@yahoo.com",
         },
         {
           id: "66",
           name: "Mrs. Hermina Daniel",
           email: "Murphy59@yahoo.com",
         },
         {
           id: "67",
           name: "Marcelino Nienow",
           email: "Estefania_Dibbert97@hotmail.com",
         },
         {
           id: "68",
           name: "Raphaelle Connelly",
           email: "Josie.Legros70@yahoo.com",
         },
         {
           id: "69",
           name: "Mina Heaney",
           email: "Pete.Hermann79@hotmail.com",
         },
         {
           id: "70",
           name: "Jaida Torp",
           email: "Jonatan82@yahoo.com",
         },
         {
           id: "71",
           name: "Megane Fadel",
           email: "Dandre82@yahoo.com",
         },
         {
           id: "72",
           name: "Angelo Schimmel V",
           email: "Frederic54@hotmail.com",
         },
         {
           id: "73",
           name: "Jaren Ferry DDS",
           email: "Kristian.Kilback@yahoo.com",
         },
         {
           id: "74",
           name: "Annette O'Connell",
           email: "Domenica.Christiansen@gmail.com",
         },
         {
           id: "75",
           name: "Elenor Rohan PhD",
           email: "Alvera.Huel48@yahoo.com",
         },
         {
           id: "76",
           name: "Linnie Beier",
           email: "Reece_Berge@gmail.com",
         },
         {
           id: "77",
           name: "Maybelle Lehner",
           email: "Arlo.Hagenes@gmail.com",
         },
         {
           id: "78",
           name: "Hailie Haag",
           email: "Edythe.Lind59@hotmail.com",
         },
         {
           id: "79",
           name: "Marcelina Schuppe",
           email: "Kip.Cummerata77@gmail.com",
         },
         {
           id: "80",
           name: "Ezra Lang",
           email: "Garret.Swaniawski@hotmail.com",
         },
         {
           id: "81",
           name: "Carey Kiehn",
           email: "Sabrina70@gmail.com",
         },
         {
           id: "82",
           name: "Carole Aufderhar",
           email: "Efrain.Schamberger77@hotmail.com",
         },
         {
           id: "83",
           name: "Fanny Beatty",
           email: "Ewald28@yahoo.com",
         },
         {
           id: "84",
           name: "Mina Lubowitz",
           email: "Vincenzo.Herman@gmail.com",
         },
         {
           id: "85",
           name: "Anabelle Thiel",
           email: "Amely.Renner@hotmail.com",
         },
         {
           id: "86",
           name: "Gerry Homenick",
           email: "Ada_Von54@hotmail.com",
         },
         {
           id: "87",
           name: "Domenico Maggio",
           email: "Freeman.Stamm@yahoo.com",
         },
         {
           id: "88",
           name: "Mauricio Bradtke III",
           email: "Alford83@yahoo.com",
         },
         {
           id: "89",
           name: "Bulah Yost III",
           email: "Nicolas_Schimmel6@yahoo.com",
         },
         {
           id: "90",
           name: "Orville Dibbert DDS",
           email: "Bryana_Herzog@yahoo.com",
         },
         {
           id: "91",
           name: "Autumn Osinski",
           email: "Davin8@hotmail.com",
         },
         {
           id: "92",
           name: "Levi Gibson",
           email: "Deangelo69@gmail.com",
         },
         {
           id: "93",
           name: "Reva McKenzie",
           email: "Bret40@hotmail.com",
         },
         {
           id: "94",
           name: "Jensen Pfannerstill",
           email: "Dax_Marquardt@hotmail.com",
         },
         {
           id: "95",
           name: "Tyrese Larson MD",
           email: "Cecelia85@yahoo.com",
         },
         {
           id: "96",
           name: "Dayne Sanford",
           email: "Tyrique_Waters16@hotmail.com",
         },
         {
           id: "97",
           name: "Jeramy Steuber",
           email: "Catalina.Stehr24@yahoo.com",
         },
         {
           id: "98",
           name: "Madge Bogisich",
           email: "Joey.Marquardt50@gmail.com",
         },
         {
           id: "99",
           name: "Casimer MacGyver",
           email: "Julius.Bednar96@yahoo.com",
         },
         {
           id: "100",
           name: "Arlene Kassulke",
           email: "Josiane_Smith@yahoo.com",
         },
       ];

      const prevButton = document.getElementById('button_prev');
      const nextButton = document.getElementById('button_next');
      const clickPageNumber = document.querySelectorAll('.clickPageNumber');
      
      let current_page = 1;
      let records_per_page = 10;
      
      this.init = function() {
          changePage(1);
          pageNumbers();
          selectedPage();
          clickPage();
          addEventListeners();
     }
      
      let addEventListeners = function() {
          prevButton.addEventListener('click', prevPage);
          nextButton.addEventListener('click', nextPage);   
      }
            
      let selectedPage = function() {
          let page_number = document.getElementById('page_number').getElementsByClassName('clickPageNumber'); 
          for (let i = 0; i < page_number.length; i++) {
              if (i == current_page - 1) {
                  page_number[i].style.opacity = "1.0";
              } 
              else {
                  page_number[i].style.opacity = "0.5";
              }
          }   
      }  
      
      let checkButtonOpacity = function() {
        current_page == 1 ? prevButton.classList.add('opacity') : prevButton.classList.remove('opacity');
        current_page == numPages() ? nextButton.classList.add('opacity') : nextButton.classList.remove('opacity');
      }

      let changePage = function(page) {
          const listingTable = document.getElementById("listingContent");

          if (page < 1) {
              page = 1;
          } 
          if (page > (numPages() -1)) {
              page = numPages();
          }
       
          listingTable.innerHTML = "";

          for(var i = (page -1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
                listingTable.innerHTML += "<tr><td class='objectBlock'>" + objJson[i].id + "</td> <td class='objectBlock'>" + objJson[i].name + "</td><td class='objectBlock'>" + objJson[i].email + "</td> </tr >";
          }
          checkButtonOpacity();
          selectedPage();
      }

      let prevPage = function() {
          if(current_page > 1) {
              current_page--;
              changePage(current_page);
          }
      }

      let nextPage = function() {
          if(current_page < numPages()) {
              current_page++;
              changePage(current_page);
          } 
      }

      let clickPage = function() {
          document.addEventListener('click', function(e) {
              if(e.target.nodeName == "SPAN" && e.target.classList.contains("clickPageNumber")) {
                  current_page = e.target.textContent;
                  changePage(current_page);
              }
          });
      }

      let pageNumbers = function() {
          let pageNumber = document.getElementById('page_number');
              pageNumber.innerHTML = "";

          for(let i = 1; i < numPages() + 1; i++) {
              pageNumber.innerHTML += "<span class='clickPageNumber'>" + i + "</span>";
          }
      }

      let numPages = function() {
          return Math.ceil(objJson.length / records_per_page);  
      }
   }
  let pagination = new Pagination();
  pagination.init();
})();