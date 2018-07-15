<template>
  <div class="band">
    <div class="section-header">
      About the Band
    </div>
    <hr/>
    <div class="about row">
      <div class="col-lg-4">
        <img src="/static/img/group.jpg" />
      </div>
      <div class="col-lg-8">
        The Rumpke Mountain Boys combine signature vocals, a unique command of string instruments (acoustic guitar, mandolin, upright bass and banjo)
        and dynamic special effects into a singular musical experience. An emotion filled musical stream of consciousness with no setlist,
        minimal structure, and intuitive improvisational flow. In this way, they summon the energy of the crowd as their guide in linking just the
        right music to precise moments in time.
        <br/><br/>
        Grateful Dead Hour host David Gans proclaimed, “One of the things I love about the Rumpke Mountain Boys is that there’s a fundamental honesty
        in their presentation. This is something they share with my other heroes, Donna the Buffalo and the Grateful Dead. They don’t make set lists
        ahead of time, they don’t rehearse their songs to a fare-thee-well-- they perform in real time. All four of them write, which is very important,
        and they draw songs from a tremendous variety of sources... being a musician is a life-long learning experience, if you’re doing it right, and
        they are.”
        <br/><br/>
        Like playing around a campfire, the Boys take turns calling the next tune, distilling shows from a sea of infinite notes created from years of
        jamming. Drawing upon a growing catalog of originals and and an ecclectic mix of covers, the Rumpke Mountain Boys blend music like a fine Irish
        whiskey-- the result affectionately dubbed Trashgrass. The Boys titled their 2012 album release with the same name,
        followed by their 2013 release, Moon, which was recorded at the famed Royal Studios in Memphis. 2016's High Time, Low Tide marks the release
        of their 4th self-produced album.
      </div>
    </div>
    <div class="section-header">
      Members
    </div>
    <hr/>
    <div class="members">

      <div class="band-member">
        Adam Copeland - Guitar, Vocals
      </div>
      <div class="band-bio">
        <img src="/static/img/adam.jpg" />
        <div>
          Adam Copeland was born in Dayton, Ohio on December 18, 1979.  Adam is an inventive singer-songwriter, and
          an accomplished musician on the guitar. Adam joined the Rumpke Mountain Boys in 2005.
          Adam has had an infatuation with music his entire life. Growing up, he was exposed to a broad range of musical influences leading
          him to his first guitar when he was 12.
          <span @click="showMoreAdam = !showMoreAdam">
            <font-awesome-icon v-if="showMoreAdam" icon="chevron-down" />
            <font-awesome-icon v-else icon="chevron-right" />
            {{showMoreAdam ? 'Show Less' : 'Show More'}}
          </span>
          <div v-show="showMoreAdam">
            That guitar was a right handed Sears electric that he flipped over and painted.  Adam fell in love with guitar and for the next couple
            years took lessons learning to play mostly grunge rock. Nirvana's Insecticide and Bleach (lefty), Alice In Chains, Stone Temple Pilots,
            and then onto classic rock-- Hendrix(lefty) Floyd, Zeppelin, Allman Brothers.
            Over the next few years, Adam's skill on the guitar increased and he started to appreciate acoustic music more.  He was exposed to more
            complex music, especially the works of Bob Dylan and the Greatful Dead. Those influences led him to recognize Jerry Garcia on the cover
            of an Old and In the Way cd in the discount bin at the grocery store.  As Adam puts it, “best four dollars I ever spent...which solidified
             my love of bluegrass.” By 2002 Adam had started a band with some friends called Amber and the Dirty Bathwater Boys.
             They played throughout Ohio and Kentucky for a few years, even opening for Rumpke a couple times, until disbanding in march of 2005.
             That day Adam called the booking agent for RMB and asked who was on guitar at the time. The answer was no one as they had been playing
              guitar-less for a few months. Adam asked for an audition and the band said yes he could, at a show in a few days.
            Adam has been playing with Rumpke ever since. Adam's current stage setup is a Lariv'ee guitar through an LR Baggs Venue DI.
          </div>
        </div>
      </div>

      <div class="band-member">
        Ben Gourley - Mandolin, Vocals
      </div>
      <div class="band-bio">
        <img src="/static/img/ben.jpg" />
        <div>
          Ben Gourley was born in Champaign, IL on October 21, 1982.  He is an accomplished singer, songwriter, and musician who plays the the Mandolin.  Ben joined the Rumpke Mountain Boys in 2001 and has since composed over 25 songs.
          Ben traces his first musical memories to music in the car as a child, looking forward to long drives where he could “really soak it in”
          <span @click="showMoreBen = !showMoreBen">
            <font-awesome-icon v-if="showMoreBen" icon="chevron-down" />
            <font-awesome-icon v-else icon="chevron-right" />
            {{showMoreBen ? 'Show Less' : 'Show More'}}
          </span>
          <div v-show="showMoreBen">
            He played snare drum in his grade school band for a few years before moving on to the guitar, eventually landing on the mandolin.
            Opening up his musical universe were influences including the Beatles, Dylan, the Grateful Dead, and Old and In the Way;
            the latter serving as Ben's introduction to bluegrass.  Primarily a self taught musician, he was heavily influenced by his Middle School
            science teacher Gary Knight.  In addition to teaching science, Gary was a part time musician who played guitar.
            While in high school Ben played with Electric Sunrise where he developed the skill, “to pull off long jams to counter our lack of material!”
            After high school Ben sowed his musical oats playing solo acoustic guitar gigs.  Then, one day while reading the paper, Ben spotted an ad in the
             local paper posted by a bluegrass band seeking a fiddle or mandolin player who could sing.
            While performing at his audition, he and Jason Wolf sparked an immediate chemistry. As Ben tells it, “Wolf and I made the room bend for a second”
             and has been with the Rumpke Mountain Boys ever since.  After joining Rumpke, Ben began creating original compositions, favoring the creative
             influences of Jerry Garcia, Bob Dylan, Tom Waits, Leon Russell, John Hartford, Jimmy Cliff, and many more.
          </div>
        </div>
      </div>

      <div class="band-member">
        JD Westmoreland - Upright Bass, Vocals
      </div>
      <div class="band-bio">
        <img src="/static/img/jd.jpg" />
        <div>
          J. D. Westmoreland is a jazz composer and performer, born September 13, 1973 in Fairfield, California. JD joined the Rumpke Mountain Boys
          in 2012.
          Westmoreland is a multi-instrumentalist mostly playing improvisations and eclectic compositions.
          Earning a degree in Theory and Composition from the University of Memphis. Westmoreland showcased his talent as a composer
          being awarded the Smit Composition Award.
          <span @click="showMoreJd = !showMoreJd">
            <font-awesome-icon v-if="showMoreJd" icon="chevron-down" />
            <font-awesome-icon v-else icon="chevron-right" />
            {{showMoreJd ? 'Show Less' : 'Show More'}}
          </span>
          <div v-show="showMoreJd">
            Composition credits include string arrangements for Christian rock band Clear, North Mississippi Allstars (Polaris (2003)),
            and Beanpole. Session work includes Willy DeVille "Horse of a Different Color" where Westmoreland plays Tiples. 1992-93 Westmoreland was
            a member of touring percussion ensemble "Patoombah" performing on the 1993 HORDE TOUR. Forming an improvisation ensemble in 1994 "Delta
            Grass" w/ musician Beau Crouch, Westmoreland started a musical movement of constant change.
            Westmoreland worked as a member of Memphis rock/anti-pop band "BEAM" (1997-99). In 2000, Westmoreland released a solo CD consisting of
            many composition styles "SOON BE CROWS IN THE GARDEN". The recording got a 4 star review from Commercial Appeal writer Bill Ellis,
            "Westmoreland covers more ground in 30 mins than most composers bother to do in a lifetime".
            Westmoreland began to play bass in early 2000. In 2003, custom bass maker "Robwave" began to sponsor Westmoreland, later to design the
            "WESTMORELAND BASS". JD Westmoreland began to play shows with jazz legend Herman Green, and touring with Willie Waldman. Westmoreland
            continued to do other styles of music, with Memphis favorite "MINIVAN BLUES BAND". Minivan released debut recording "LIFELONG TURBULATION"
            which features two Westmoreland compositions, title track "Lifelong Turbulation", and gypsy styled "Albino Trout".
            J.D. joined the Rumpke Mountain Boys in November of 2011, playing his first gig as the full time upright bassist November 13th in Boulder, CO.
            Since joining RMB JD has contributed to the growth and popularity of the band while composing a number of tracks for both Trashgrass and Moon.
            <br/><br/>
            In addition to his orchestral and ensemble compositions, J.D. has composed the following songs:
            <div style="display: flex">
              <ul>
                <li>Albino Trout</li>
                <li>Banks Of The River</li>
                <li>Bufords Blue</li>
                <li>Cross By Stream</li>
                <li>Delivery Man Blues</li>
                <li>Dreams Of Myself Dying</li>
                <li>Lifelong Turbulation</li>
                <li>Low Me</li>
                <li>Molly</li>
                <li>Pocket Of Marbles</li>
                <li>Red Footed Genius</li>
                <li>Red Hat</li>
                <li>Ride Your Eye</li>
                <li>Side Of The Road</li>
                <li>This Blue Moon</li>
                <li>Trouble</li>
                <li>Wicked Man</li>
              </ul>
              <div>
                Soon Be Crows In The Garden(Solo Album):
                <ul>
                  <li>Sylvain Crow</li>
                  <li>More Wood</li>
                  <li>Captain Major</li>
                  <li>Rasa Luna</li>
                  <li>Partches</li>
                  <li>Bekdum</li>
                  <li>Yazel</li>
                  <li>Oriental Therapy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="band-member">
        Jason Wolf - Banjo, Dobro, Harmonica, Saw, Vocals
      </div>
      <div class="band-bio">
        <img src="/static/img/wolfie.jpg" />
        <div>
          Jason Wolf, born September 25, 1980 in Cincinnati, OH is a musician, singer and songwriter who plays  Banjo, Dobro, Saw, Harmonica,
          Gourd, Upright Bass, Mandolin, and  Pedal Steel.
          A founding member of RMB, "Wolfie" has a colorful past of influences and experiences which allow him to create some of the most innovative
          and original bluegrass around.
          <span @click="showMoreWolfie = !showMoreWolfie">
            <font-awesome-icon v-if="showMoreWolfie" icon="chevron-down" />
            <font-awesome-icon v-else icon="chevron-right" />
            {{showMoreWolfie ? 'Show Less' : 'Show More'}}
          </span>
          <div v-show="showMoreWolfie">
            Born in Cincinnati, OH on September 25, 1980, Wolfie traces his original musical influences back to time spent driving through the Blue Ridge mountains while vacationing with his parents, listening to dozens of mix tapes, memorizing the lyrics, and joining his parents in singing along.  Singing has been a passion ever since.  Jason received his first instrument when he was just five years old and his brother gifted him a Smurf drum kit.  As Jason grew older he experimented with the harmonica, electric guitar, acoustic guitar, all eventually leading some years later to his first Banjo.
            After being expelled from high school Jason arrived home to discover a brand new Gibson Mastertone ESS banjo.
            At the time he did not play banjo, but his father told Jason of his grandfather's love for banjo music and, if he was willing to learn,
            he could keep this Cadillac of banjos.   The banjo was so nice looking and sounded so sweet that Jason couldn't confess  getting expelled
            from school lest he risk losing his new found prize.
            Wolfie pretended to go to school for awhile just to keep the five string, eventually getting lessons and ultimately being found out--
            though he was allowed to keep on with the Banjo. Vernon Mcyntire, son of the late great Steamboat Mcyntire (a southern Ohio favorite and
            a hell of a banjo picker), instructed him over the next year, teaching Jason all of the “vitals”. Wolfie to this day holds Vernon's banjo
            pickin' in the highest regard. Jason lists a great number of musical influences--  starting with his parents introduction of doowop,
            early rock, country, Elton John, and Ray Charles; The Doors, Pink Floyd, and Zappa oozing out from under his brothers bedroom door;
            and falling asleep to the sounds of his sister's radio-- Lionel Ritchie, Michael Jackson, etc.. Wolfie's brother gave him his first
            tape-- Sgt. Peppers.  From there he and his Banjo began exploring the music of Jerry Garcia, along with early Osborne brothers.
            Early in Jason's teenage years he read a lot of poetry, wrote some, evolving to become more emotional with his writing,
            “I tried to start putting it all to music in any way possible-- some stuck, most didn't, but I always wrote more, and still do”.
            Influences like Shel Silverstein, Shakespeare, Poe, Oscar Wilde, Dylan Thomas, Rudyard Kipling, Robert Frost, some Ginsberg and of course
            Kerouac's books-- having been read many times over the years, up to the present day.
            “One of the main reasons that I enjoy writing is reading, and listening to people like Bob Dylan, Irving Berlin, Woody Guthrie, the
            Carter family, Willie Nelson, and into my later years I am seeking inspiration from the writings of Tom Waits, Robert Hunter, David Bromberg,
            The McCoury's, Tim O Brien, and last but certainly not least John Hartford, my hero.”
            Wolf's first band was called Schmuck and the Dyslexic Cheese Beavers. His next project was HOMESKILLET, an 8 piece band that eventually
            spawned Rumpke.  You can still catch them on Thanksgiving in Cincy every year.
            Wolfie plays a customized Bishline Midnight Moon Banjo built by Rob Bishline out of Tulsa, OK, a 1996 Gibson Mastertone Earl Scruggs
            Standard, a parlor sized martin guitar with finger picks, a 1977 Fender pedal steel guitar through a Fender Blues Jr amp, and a Morgan
            Monroe squareneck resonator.  All running through Fishman pickups into Fishman amps (except the pedal steel), and Jason's most beloved effect,
            the power wah. Wolfie is a big fan of anything that makes noise, just catch one of his distortion jams for proof!
            <div style="display: flex">
              <ul>
                <li>Blue Ridge</li>
                <li>Cincinnati Moon</li>
                <li>Cold Hearted Whine</li>
                <li>Cool Mountain Air</li>
                <li>Drink It Down</li>
                <li>Fillin' My Cup</li>
                <li>Home to Me</li>
                <li>Huck's Song</li>
                <li>The Man</li>
                <li>Miles to Memphis</li>
                <li>Overboard</li>
                <li>Saddle Sore</li>
                <li>Summer in the Country</li>
                <li>We Howl at the Moon</li>
                <li>Weary Restless Memories</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Band',
  data () {
    return {
      showMoreAdam: false,
      showMoreBen: false,
      showMoreJd: false,
      showMoreWolfie: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.band {
  padding: 10px;
  hr {
    color: black;
  }
  .about {
    padding: 0px 40px;
    text-align: justify;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .section-header {
    padding: 20px 20px 0px 20px;
    font-size: 19px;
  }
  .members {
    padding: 0px 40px;
    .band-member {
      font-style: italic;
      padding-bottom: 10px;
    }
    .band-bio {
      font-size: 14px;
      padding-left: 15px;
      padding-bottom: 14px;
      display: flex;
      align-text: justify;
      > div {
        padding-left: 20px;
      }
      img {
        height: min-content;
      }
      span {
        cursor: pointer;
        margin-left: 7px;
        font-weight: bold;
      }
    }
  }
}

</style>
