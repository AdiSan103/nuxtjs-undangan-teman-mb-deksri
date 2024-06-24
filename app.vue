<template>
  <div
    class="overflow-x-hidden relative bg-gradient-to-r from-amber-100 to-amber-50/70"
  >
    <!-- button to play/pause music -->
    <img
      src="/public/2.png"
      alt=""
      class="fixed bottom-0 -left-[100px] w-[800px] -z-10"
    />
    <!--  -->
    <section id="tanggal" class="z-20 relative font-robotomono">
      <img
        src="/public/1.png"
        class="absolute bottom-0 -left-[150px] w-[500px] -rotate-[70deg] animate-rotate-1"
        alt=""
      />
      <img
        src="/public/1.png"
        class="absolute -top-[100px] -right-[150px] w-[500px] rotate-[90deg] animate-rotate-2"
        alt=""
      />
      <div
        class="flex flex-col justify-center items-center min-h-screen z-50 relative"
      >
        <p class="mb-4">The Wedding of</p>
        <h1 class="text-center text-lg">
          Muhammad Najib Baharsyah , S . Pd
          <br />
          <p class="font-alexbrush text-6xl mt-3">&</p>
          Mega Wahyu Mustika Amd . Kep
        </h1>
        <p class="text-xs mt-1">14 - 08 - 2024</p>
        <p class="text-xs mt-1">Kepada YTH.</p>
        <p class="text-xs mt-1 mb-2">Grup/Bapak/Ibu/Saudara/i</p>
        <p class="font-bold text-2xl mb-4 text-amber-800">
          {{ visitor }}
        </p>
        <a
          href="#resepsi"
          class="bg-amber-800 px-4 py-2 rounded-2xl text-white transition hover:bg-amber-900 hover:scale-105"
        >
          Open Invitation
        </a>
      </div>
    </section>
    <!--  -->
    <section
      id="resepsi"
      class="px-2 relative font-robotomono min-h-screen flex flex-col justify-center items-center"
    >
      <img
        src="/public/3.png"
        alt=""
        class="absolute w-full max-w-[800px] animate-rotate-1"
      />
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        class="flex flex-col justify-center items-center py-10 bg-white bg-opacity-80 w-full max-w-[500px] mx-auto rounded-2xl z-10 border-2 border-amber-800"
      >
        <div class="text-center" data-aos="fade-up" data-aos-duration="1500">
          <p class="font-alexbrush font-bold text-2xl">
            Muhammad Najib Baharsyah , S . Pd
          </p>
          <p>Putra dari Bapak Drs . Joko Minarto , M . Pd</p>
          <p>&</p>
          <p>Drs . Ibu Siti Karimah</p>
        </div>
        <div
          class="text-center mt-10"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <p class="font-alexbrush font-bold text-2xl">
            Mega Wahyu Mustika Amd . Kep
          </p>
          <p>Putri dari Bapak Sukidi (Alm)</p>
          <p>&</p>
          <p>Ibu Suparmi</p>
        </div>
        <div
          class="flex gap-2 mt-5"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <!-- item -->
          <div
            class="flex flex-col justify-center items-center bg-amber-800 w-20 py-2 rounded-xl text-white"
          >
            <span class="days">0</span>
            <span>Hari</span>
          </div>
          <!-- item -->
          <div
            class="flex flex-col justify-center items-center bg-amber-800 w-20 py-2 rounded-xl text-white"
          >
            <span class="hours">0</span>
            <span>Jam</span>
          </div>
          <!-- item -->
          <div
            class="flex flex-col justify-center items-center bg-amber-800 w-20 py-2 rounded-xl text-white"
          >
            <span class="minutes">0</span>
            <span>Menit</span>
          </div>
          <!-- item -->
          <div
            class="flex flex-col justify-center items-center bg-amber-800 w-20 py-2 rounded-xl text-white"
          >
            <span class="seconds">0</span>
            <span>Detik</span>
          </div>
        </div>
      </div>
    </section>
    <!--  -->
    <section
      id="lokasi"
      class="relative h-screen font-robotomono py-5 overflow-hidden flex justify-center items-center"
    >
      <img
        src="/public/1.png"
        class="absolute bottom-0 -left-[150px] w-[500px] -rotate-[70deg] animate-rotate-1"
        alt=""
      />
      <img
        src="/public/1.png"
        class="absolute -right-[150px] top-0 w-[500px] rotate-[90deg] animate-rotate-1"
        alt=""
      />
      <div
        class="container mx-auto bg-white bg-opacity-80 max-w-[500px] w-full p-5 rounded-lg z-10 relative border-2 border-amber-200 mx-2"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.6103746627386!2d111.2062412!3d-7.5081917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79f3e2087703bd%3A0xd8a2c2a6e0e4a28f!2sGedung%20Graha%20Semar%20Ngrambe!5e0!3m2!1sid!2sid!4v1719225922953!5m2!1sid!2sid"
          width="100%"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="text-center">
          <h2 class="font-alexbrush text-2xl mt-7 -mb-2">Satu Momen</h2>
          <p class="mb-4">Gedung Graha Semar Ngrambe</p>
        </div>
      </div>
    </section>
    <nav class="fixed bottom-0 z-20 w-full px-5 py-2">
      <div
        class="flex justify-evenly bg-white bg-opacity-80 w-full py-3 rounded-xl shadow-2xl border-2 border-amber-200"
      >
        <!-- item -->
        <a
          href="/#tanggal"
          class="flex flex-col justify-center items-center text-gray-500 cursor-pointer hover:scale-105 transition"
          ><svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
              stroke="gray"
              stroke-width="2"
              stroke-linecap="round"
            />
            <rect x="6" y="12" width="3" height="3" rx="0.5" fill="gray" />
            <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="gray" />
            <rect x="15" y="12" width="3" height="3" rx="0.5" fill="gray" />
          </svg>
          <span>Tanggal</span></a
        >
        <!-- item -->
        <a
          href="/#resepsi"
          class="flex flex-col justify-center items-center text-gray-500 cursor-pointer hover:scale-105 transition"
        >
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            fill="gray"
          >
            <path
              d="M12,1.48C6.2,1.48,1.5,4.9,1.5,9.11,1.5,11.48,3,13.6,5.32,15v2.7l2.59-1.55a13.85,13.85,0,0,0,4.09.6c5.8,0,10.5-3.42,10.5-7.64S17.8,1.48,12,1.48Z"
            />
            <path
              d="M21.13,12.88A4,4,0,0,1,22.5,15.8a4.22,4.22,0,0,1-1.91,3.36v2.36l-2.18-1.3a9,9,0,0,1-2.48.35c-3.27,0-6-1.75-6.47-4"
            />
            <path
              d="M14,6.25A2.35,2.35,0,0,0,12,7.3,2.35,2.35,0,0,0,7.7,8.59c0,3.52,4.3,4.69,4.3,4.69s4.3-1.17,4.3-4.69A2.35,2.35,0,0,0,14,6.25Z"
            />
          </svg>
          <span> Resepsi </span></a
        >
        <!-- item -->
        <a
          href="/#lokasi"
          class="flex flex-col justify-center items-center text-gray-500 cursor-pointer hover:scale-105 transition"
          ><svg
            width="25px"
            height="25px"
            viewBox="-4 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          >
            <title>location</title>
            <desc>Created with Sketch Beta.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              <g
                id="Icon-Set-Filled"
                sketch:type="MSLayerGroup"
                transform="translate(-106.000000, -413.000000)"
                fill="gray"
              >
                <path
                  d="M118,422 C116.343,422 115,423.343 115,425 C115,426.657 116.343,428 118,428 C119.657,428 121,426.657 121,425 C121,423.343 119.657,422 118,422 L118,422 Z M118,430 C115.239,430 113,427.762 113,425 C113,422.238 115.239,420 118,420 C120.761,420 123,422.238 123,425 C123,427.762 120.761,430 118,430 L118,430 Z M118,413 C111.373,413 106,418.373 106,425 C106,430.018 116.005,445.011 118,445 C119.964,445.011 130,429.95 130,425 C130,418.373 124.627,413 118,413 L118,413 Z"
                  id="location"
                  sketch:type="MSShapeGroup"
                ></path>
              </g>
            </g>
          </svg>
          <span>Lokasi</span>
        </a>
      </div>
    </nav>
  </div>
</template>


<style>
.animate-rotate-1 {
  animation: rotate 10s infinite ease-in-out;
}
@keyframes rotate {
  0% {
    transform: rotate(-70deg);
  }
  50% {
    transform: rotate(-60deg) scale(1.05);
  }
  100% {
    transform: rotate(-70deg);
  }
}
.animate-rotate-2 {
  animation: rotate2 10s infinite ease-in-out;
}
@keyframes rotate2 {
  0% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(100deg) scale(1.05);
  }
  100% {
    transform: rotate(90deg);
  }
}
.animate-scale-1 {
  animation: scale1 10s infinite ease-in-out;
}
</style>


<script setup>
import { ref, onMounted } from "vue";

const visitor = ref("");
const musicPlaying = ref(false);
const musicElement = ref(null);

const setVisior = () => {
  let url = new URLSearchParams(window.location.search);
  const visitorVaue = url.get("untuk");
  visitor.value = visitorVaue || "Tamu";
};

const dateNow = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // getMonth() returns month from 0-11
  const year = now.getFullYear();
  return `${day}-${month}-${year}`;
};

//
onMounted(setVisior);
onMounted(() => {
  const timer = (date) => {
    // target day
    let timeTarget = new Date(date).getTime();
    // looping
    let thisInterval = setInterval(function () {
      // today
      let timeNow = new Date().getTime();
      // difference
      let timeDistance = timeTarget - timeNow;
      // conditional time target is true
      if (timeDistance < 0) {
        // stop Interval
        clearInterval(thisInterval);
      } else {
        // // inner in html and change time in :
        // 1.days
        document.querySelector(".days").innerHTML = Math.floor(
          timeDistance / (1000 * 60 * 60 * 24)
        );
        // 2.hours
        document.querySelector(".hours").innerHTML = Math.floor(
          (timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        // 3.minutes
        document.querySelector(".minutes").innerHTML = Math.floor(
          (timeDistance % (1000 * 60 * 60)) / (1000 * 60)
        );
        // 4.seconds
        document.querySelector(".seconds").innerHTML = Math.floor(
          (timeDistance % (1000 * 60)) / 1000
        );
      }
    }, 100);
  };
  timer("2024,08,14");
});
</script>
