//const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('client'))
app.use(express.urlencoded());
//app.use(bodyParser.json());

app.get('/MH370', (req, resp) => {
    const newDiv = `
    <div id = "MH370">            <header class="masthead" style="background-image: url('MH370.jpg')">
    <div class="px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <div>
                    <h1>The <span class = "white";>My</span>sterious Disapearance of the MH370</h1>
                </div>
            </div>
        </div>
    </div>
</header>
    <br>
    <p><span class = "first">M</span>alaysian airlines flight 370 set off on March 8th 2014 for what was supposed to be just another routine flight from Kuala Lampur to Beijing. The flight was unremarkable for the first 40 minutes while still in Malaysian airspace, however right before leaving Malaysian airspace.
         The flight had one last communication with Malaysian ATC, with ATC radioing in to pass off the flight to Vietnamese ATC. The captain then responded with "Good night Malaysian three-seven-zero" which isn't that unusual. 
         However, right after entering Vietnamese airspace the flight suddenly dissapeared off the radar. It was later found out that the flight had never made contact with Vietnamese ATC. 
         Not only that but using satellites it was found out that they suddenly veered off course and started to head South, with the reason remaining unknown to this day. Some say it could have been a system failure however according to the Malaysian Government's safety report
        it was likely deliberate. </p>
    <br>
    <h2>Possible explanations</h2>
    <p>There have been hundered upon hundered of theories of the explanation of the disapearance of the MH370 with some being more credible than others. Yet, experts cannot seem to agree on a single one as none come close to explaining what happened.
        Some experts believe it was a terrorist attack but with no wreckage of the plain only small debris that washed up 1-2 years later it is hard to say. Some say it was hypoxia from rapid decompression similar to what Helios 522 suffered in Greece. But without the plane's wreckage 
        it is hard to confirm one specific theory. Some people say it was aliens, what proof they have? Seemingly just a simple fear of the unknown.
    </p>
    <br>
    <h2>How it affected the airline industry</h2>
    <p>After this myterious incident, the International Civil Aviation Organisation ordered all airlines to install live tracking equipment in order to keep track of these planes in such events, espescially those over the ocean. 
        It is said that aircraft manufacturers are also developing black boxes that eject and float automatically when the plane hits water.</p>
    <br>
    <h2>Want to find out more?</h2>
    <p>Watch S14 E11 of Mayday(Documentary TV series)</p>
  
  </div>`;

  
  resp.send(newDiv);
})

app.get('/KLM', (req, resp) => {
    const newDiv = `
    <div id = KLM>
    <header class="masthead" style="background-image: url('KLM.png')">
    <div class="px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <div>
                    <h1><span class = "white";>Aviation's Deadliest Mistake</span></h1>
                </div>
            </div>
        </div>
    </div>
</header>
    <br>
    <p><span class = "first">T</span>he misunfortunes of KLM flight 4805 and Pan Am flight 1736. Neither flight was supposed to be landing on the island Tenerife in the Canary Islands that March 27th 1977. 
      However due to a bombing at their original destination of Los Palmas in Gran Canaria both flights were redirected towards Tenerife.
      Another series of misunfortunate miscommunications happened between ATC and both flight crews leading to KLM starting takeoff with Pan Am still on the runway unseen due to the fog.
      As the KLM plane began to lift off the tarmac the lower part of the plane collided with the Pan Am flight turning off the runway.
      leading to the deaths of the entire KLM flight and a number of the Pan Am flight also losing their lives, leading to a total loss of 583 lives.
      The highest amount aviation has ever seen from one incident.</p>
    <br>
    <h2>How it affected the airline industry</h2>
    <p>Subsequently, sweeping changes were made to the international airline regulations to prevent this sort of horrific disaster again.
      All control towers and flight crews worldwide were now required to use standardized English phrases. Not only that but the hierarchy between crew members was deemphasized and decision making was made by mutual agreement.
      This has now become standard practice in today's age.</p>
    <br>
    <h2>Want to find out more?</h2>
    <p>Watch S16 E3 of Mayday(Documentary TV series) or read the transcript between the flight crews and ATC.</p>
  </div>`;
  resp.send(newDiv);
})

app.get('/TW2UA', (req, resp) => {
    const newDiv = `
    <div id = TW2UA>

    <header class="masthead" style="background-image: url('TW2UA.jpg')">
    <div class="px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <div>
                    <h1>Collision over the<span class = "white";> Grand Canyon</span></h1>
                </div>
            </div>
        </div>
    </div>
</header>


    <br>
    <p><span class = "first">T</span>wo flights. TWA 2 and United Airlines 718. Both had just taken off from Los Angeles international airport on June 30th 1956. One headed to Chicago the other to Kansas city until their unfortunate paths crossed and the planes collided over the Grand Canyon killing all 128 passengers on both planes.
       Unfortunately, this was the early days of aviation, we had nowhere near as much safety measures as we do today so fear not as an accident of this sort is next to impossible in this day and age.</p>
    <br>
    <h2>How it affected the airline industry</h2>
    <p>This crash led to the monumental decision to from an FAA in order to oversee aerial safety. Also leading to a $250 million upgrade of the ATC system which was a huge upgrade as this isn't accounting for inflation.
      The FAA was crucial in overseeing air safety as for example their decision to require small aircraft to carry transponders and position/altitude broadcasters after an incident where a small aircraft wandered into the wrong area striking another plane killing 86 people.
       Since the FAA decision no small aircraft has ever collided with an Airliner in the US.
    </p>
    <br>
    <h2>Want to find out more?</h2>
    <p>Watch S12 E6 of Mayday(Documentary TV series)</p>
  </div>`;
  resp.send(newDiv);
})

app.get('/Contact', (req, resp) => {
  const emptyDiv = ``;
  resp.send(emptyDiv);
})

app.get('/Main', (req, resp) => {
  const mainDiv = `            <header class="masthead" style="background-image: url('plane-bg.jpg')">
  <div class="px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
              <div>
                  <h1>Fateful Flights</h1>
                  <h3 class = "text-center">Plan crashes that shaped <span class = "white">the skies</span> </h3>
              </div>
          </div>
      </div>
  </div>
</header>
<div class="container px-4 px-lg-5">
  <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="post-preview">
              <a href="#" onclick=loadMH370() >
                  <h2>The dissapearance of MH370</h2>
                  <h4>Where is it now?</h4>
              </a>
              <p>Posted by Fateful Flights on December 28th, 2023</p>
          </div>
          <hr class="my-4" />
          <div class="post-preview">
              <a href="#" onclick=loadKLM() >
                  <h2>Aviation's Deadliest Mistake</h2>
                  <h4>How miscommunication claimed the lives of 583.</h4></a>
              <p>Posted by Fateful Flights on January 3rd, 2024</p>
          </div>
          <hr class="my-4" />
          <div class="post-preview">
              <a href="#" onclick=loadTW2UA() >
                  <h2>Collision over the Grand Canyon</h2>
                  <h4>The chance of crashing midair is low, but not zero.</h4></a>
              <p>Posted by Fateful Flights on January 7th, 2024</p>
          </div>
          <hr class="my-4" />
          <div class="post-preview">
              <a href="#" onclick=loadRandom()>
                  <h2>Surprise me.</h2>
                  <h4>Feeling indecisive? Click me and get a random crash report.</h4></a>
              <p>Posted by Fateful Flights on ???</p>
          </div>
          <hr class="my-4" />
      </div>
  </div>
</div>`;
  resp.send(mainDiv);
})

app.post("/parseComment", (req, res) => {
  const comment = req.body;
  res.send(comment)
});

const imageNames = [
  'AC797.png',
  'AF447.jpg',
  'anonymous.jpg',
  'DHL.webp',
  'KLM.png',
  'MH370.jpg',
  'plane-bg.jpg',
  'TW2UA.jpg',
];

app.get('/Images', (req, res) => {
  res.json({ images: imageNames });
});

app.listen(8090)
