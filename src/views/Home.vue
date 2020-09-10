<template>
  <div
    class="home w-full font-body pt-8 bg-gray-200 h-full  px-10 md:px-16 lg:px-24"
  >
    <!-- start header -->
    <div class="mb-8 font-bold text-2xl text-gray-800">
      Github
      <span class="font-hairline">Jobs</span>
    </div>
    <div
      class="bg-cover bg-center bg-gray-300 object-fill h-auto rounded-lg m-auto"
      style="background-image: url('https://res.cloudinary.com/dpsyke0mw/image/upload/c_scale,q_auto,w_1200/v1599213501/backgroundImg_yqzg3t.png');"
    >
      <div class="flex items-center py-10 px-10 md:px-32 lg:px-56">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          class="h-16 w-16 px-3 py-6 text-gray-500 m-0 bg-white rounded-l-md"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"
            fill-rule="evenodd"
          />
        </svg>
        <input
          type="text"
          class="w-11/12 h-12 px-2 py-8 lg:mr-2 ml-0 bg-white  rounded-r-md focus:outline-none placeholder-gray-400 text-xs md:text-sm font-list"
          placeholder="Title, companies, expertise or benefits"
          v-model="searchTop"
          @keyup.enter="fetchJobs"
        />
        <button
          class="bg-blue-400 text-gray-100 px-4 md:px-10 py-2 md:py-3 rounded shadow -ml-24 md:-ml-32 font-list text-sm"
          @click="fetchJobs"
        >
          Search
        </button>
      </div>
    </div>
    <!-- end header -->
    <!-- start body -->
    <div class="flex mt-12">
      <!-- start left -->
      <div class="w-1/3 h-screen">
        <!-- full time -->
        <div class="flex items-center mb-8">
          <input
            type="checkbox"
            class="rounded mr-2 w-4 h-4"
            v-model="jobType"
          />
          <span class="text-gray-600 text-xs md:text-sm">Full Time Only</span>
        </div>
        <!-- location -->
        <div class="mb-4">
          <span class="text-gray-500 text-sm md:font-medium">LOCATION</span>
        </div>

        <div
          class="w-5/6 h-8 md:h-12 md:pl-3 md:pr-2 pl-1 pr-1 bg-white shadow flex justify-between items-center relative mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            class="w-5 h-5 mr-2 text-gray-500"
            fill="currentcolor"
          >
            <path
              d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c.338 0 .67.02 1 .05V6h2v-.574a11.03 11.03 0 016 4.27V13l1 2v1h1c0 .366-.02.729-.055 1.086-.009.096-.029.188-.04.283-.034.263-.068.524-.12.781-.019.096-.044.19-.066.286-.058.254-.12.506-.196.753-.026.085-.056.168-.084.252a10.88 10.88 0 01-.275.752c-.03.072-.063.142-.094.213-.112.255-.23.506-.36.75-.03.06-.064.117-.097.174a11.015 11.015 0 01-1.076 1.592l-.09.111c-.194.233-.4.456-.611.672-.031.031-.06.065-.092.096a10.99 10.99 0 01-.678.617c-.033.028-.061.057-.095.084-.234.192-.48.37-.729.543-.039.027-.074.058-.113.084-.24.16-.488.307-.74.45a10.913 10.913 0 01-3.871 1.302l4.011-3.024 1.1-1.1L24 20v-1l-2-1h-1l-2-2h-2l-1 1v1l-1 1v2l2 1.6-1.977 4.351C9.414 26.453 5 21.735 5 16c0-3.408 1.559-6.459 4-8.479V8L8 9v2.2L9 15l5 2h1v-1l-3-1v-2h3l1-2.5L18 9V8l-3-2-1.437-.719A10.999 10.999 0 0116 5zm-1 9v1h2v-1h-2z"
            />
          </svg>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="City, State, Zip code or Country"
            class="appearance-none w-full outline-none focus:outline-none active:outline-none  placeholder-gray-400 text-xs md:text-sm font-list"
            v-model="location"
            @keyup.enter="fetchJobs"
          />
        </div>
        <div class="flex items-center mb-4">
          <input
            type="radio"
            name="london"
            value="london"
            class="rounded mr-2 w-4 h-4"
            v-model="location"
            @change="fetchJobs"
          />
          <span class="text-gray-600 text-xs md:text-sm">London</span>
        </div>
        <div class="flex items-center mb-4">
          <input
            type="radio"
            name="amsterdam"
            value="amsterdam"
            class="rounded mr-2 w-4 h-4"
            v-model="location"
            @change="fetchJobs"
          />
          <span class="text-gray-600 text-xs md:text-sm">Amsterdam</span>
        </div>
        <div class="flex items-center mb-4">
          <input
            type="radio"
            name="new+york"
            value="new+york"
            class="rounded mr-2 w-4 h-4"
            v-model="location"
            @change="fetchJobs"
          />
          <span class="text-gray-600 text-xs md:text-sm">New York</span>
        </div>
        <div class="flex items-center mb-4">
          <input
            type="radio"
            name="berlin"
            value="berlin"
            class="rounded mr-2 w-4 h-4"
            v-model="location"
            @change="fetchJobs"
          />
          <span class="text-gray-600 text-xs md:text-sm">Berlin</span>
        </div>
      </div>
      <!--start right  -->
      <div class="w-2/3 font-list" v-if="!jobMessage">
        <div class="w-2/3 font-list h-full mx-auto" v-show="isLoading">
          <Spinner></Spinner>
        </div>
        <div
          class="min-h-2 shadow font-list text-gray-800 p-3 bg-white flex justify-start mb-3 cursor-pointer"
          v-for="job in pageOfItems"
          :key="job.id"
          @click="onJobPosting(job.id)"
        >
          <div class="align-middle hidden md:block">
            <img
              class="w-24 mt-6 rounded mr-2 object-scale-down"
              :src="job.company_logo"
              v-if="job.company_logo != null"
            />
            <img
              src="@/assets/not_found.png"
              alt=""
              class=" mt-6 rounded mr-2 "
              v-else
            />
          </div>
          <div class="ml-4 flex flex-col justify-start flex-1 items-start">
            <p class="text-indigo-700 text-xs">{{ job.company }}</p>
            <p class="text-indigo-700 py-1 mb-1">{{ job.title }}</p>
            <div class="flex items-center w-full py-2 justify-between mt-2">
              <button
                class="bg-transparent text-indigo-700 text-xs sm:text-xs md:text-sm px-1 sm:px-1 md:px-3 border border-indigo-700 rounded"
              >
                {{ job.type }}
              </button>
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  class="w-5 h-5 mr-2 text-gray-400 ml-1"
                  fill="currentcolor"
                >
                  <path
                    d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c.338 0 .67.02 1 .05V6h2v-.574a11.03 11.03 0 016 4.27V13l1 2v1h1c0 .366-.02.729-.055 1.086-.009.096-.029.188-.04.283-.034.263-.068.524-.12.781-.019.096-.044.19-.066.286-.058.254-.12.506-.196.753-.026.085-.056.168-.084.252a10.88 10.88 0 01-.275.752c-.03.072-.063.142-.094.213-.112.255-.23.506-.36.75-.03.06-.064.117-.097.174a11.015 11.015 0 01-1.076 1.592l-.09.111c-.194.233-.4.456-.611.672-.031.031-.06.065-.092.096a10.99 10.99 0 01-.678.617c-.033.028-.061.057-.095.084-.234.192-.48.37-.729.543-.039.027-.074.058-.113.084-.24.16-.488.307-.74.45a10.913 10.913 0 01-3.871 1.302l4.011-3.024 1.1-1.1L24 20v-1l-2-1h-1l-2-2h-2l-1 1v1l-1 1v2l2 1.6-1.977 4.351C9.414 26.453 5 21.735 5 16c0-3.408 1.559-6.459 4-8.479V8L8 9v2.2L9 15l5 2h1v-1l-3-1v-2h3l1-2.5L18 9V8l-3-2-1.437-.719A10.999 10.999 0 0116 5zm-1 9v1h2v-1h-2z"
                  />
                </svg>
                <p class="text-gray-400 text-xs md:text-sm font-medium md:mr-3">
                  {{ job.location }}
                </p>
              </div>
              <div class="hidden md:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  class="w-5 h-5 mr-2 text-gray-400"
                  fill="currentcolor"
                >
                  <path
                    d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6zm-1 2v9h7v-2h-5V8z"
                  />
                </svg>
                <p class="text-gray-400 text-sm font-medium">
                  {{ jobPosted(job.created_at) }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full font-list mt-4" v-show="pag">
          <jw-pagination
            :items="filteredJobs"
            @changePage="onChangePage"
            :pageSize="5"
            :styles="customStyles"
            class="d-flex justify-end"
          ></jw-pagination>
        </div>
      </div>
      <div class="w-2/3 font-list" v-else>
        <p class="text-center text-medium md:text-xl font-semibold">
          {{ jobMessage }}
        </p>
      </div>
    </div>
    <div
      class="mt-1 text-center font-semibold text-gray-500 text-sm bg-gray-200"
    >
      clickanidea @ DevChallenges.io
    </div>
  </div>
</template>

<script>
import { format } from "timeago.js";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "Home",
  components: {
    Spinner,
  },
  data() {
    return {
      jobs: null,
      pageOfItems: [],
      url:
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?",
      totJobs: 0,
      jobMessage: "",
      isLoading: false,
      pag: false,
      searchTop: "",
      jobType: false,
      location: "canada",
      customStyles: {
        pagination: {
          ["flex-wrap"]: "wrap",
        },
      },
    };
  },
  methods: {
    jobPosted(cAt) {
      if (cAt) return format(cAt);
      else return null;
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    fetchJobs: function() {
      this.isLoading = true;
      this.jobMessage = "";
      fetch(
        this.url +
          "location=" +
          this.location +
          "&description=" +
          this.searchTop
      )
        .then((response) => response.json())
        .then((data) => {
          this.jobs = data;
          this.totJobs = Object.keys(this.jobs).length;
          if (this.totJobs === 0) {
            this.jobMessage = "No results for your search criteria";
            sessionStorage.clear();
          } else {
            sessionStorage.setItem("jobs", JSON.stringify(this.jobs));
            sessionStorage.setItem("location", JSON.stringify(this.location));
            sessionStorage.setItem("searchTop", JSON.stringify(this.searchTop));
            if (this.totJobs > 5) {
              this.pag = true;
            } else {
              this.pag = false;
            }
            sessionStorage.setItem("pag", JSON.stringify(this.pag));
          }
          this.isLoading = false;
        });
    },
    onJobPosting(id) {
      if (id) {
        this.$router.push({ path: `/${id}` });
      }
    },
  },
  mounted() {
    if (sessionStorage.getItem("jobs")) {
      this.jobs = JSON.parse(sessionStorage.getItem("jobs"));
      this.location = JSON.parse(sessionStorage.getItem("location"));
      this.searchTop = JSON.parse(sessionStorage.getItem("searchTop"));
      this.pag = JSON.parse(sessionStorage.getItem("pag"));
    } else {
      this.fetchJobs();
    }
  },
  computed: {
    filteredJobs: function() {
      if (!this.jobType) {
        return this.jobs;
      } else {
        return this.jobs.filter((job) => {
          return job.type === "Full Time";
        });
      }
    },
  },
};
</script>

<style scoped>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
</style>
