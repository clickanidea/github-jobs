<template>
  <div
    class="job w-full font-body pt-8 bg-gray-200 h-full sm:px-4 md:px-16 lg:px-24"
  >
    <div class="mb-8 font-bold text-2xl text-gray-800">
      Github
      <span class="font-hairline">Jobs</span>
    </div>
    <div class="block md:flex">
      <div class="w-1/3">
        <div class="flex items-center mb-6 cursor-pointer" @click="goBack">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 32 32"
            class="text-blue-500 mr-2 w-8 h-8"
          >
            <path
              d="M10.8125 9.28125l-6.71875 6.71875 6.71875 6.71875 1.40625-1.4375 -4.28125-4.28125h20.0625v-2h-20.0625l4.28125-4.28125Z"
              fill="#1E86FF"
            ></path>
          </svg>
          <p class="text-blue-500">
            back to search
          </p>
        </div>
        <div class="mb-4">
          <span class="text-gray-500 text-sm md:font-medium">HOW TO APPLY</span>
        </div>
        <div class="markdown" v-html="howToApply"></div>
      </div>
      <div class="w-2/3">
        <div class="flex">
          <p class="text-2xl font-semibold text-indigo-800 mr-2">{{ title }}</p>
          <button
            class="bg-transparent text-indigo-700 text-xs py-1 px-2 border-2 font-bold  border-indigo-700 rounded"
          >
            {{ jobType }}
          </button>
        </div>
        <div class="hidden md:flex mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            class="w-5 h-5 mr-2 text-gray-500"
            fill="currentcolor"
          >
            <path
              d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6zm-1 2v9h7v-2h-5V8z"
            />
          </svg>
          <p class="text-gray-500 text-sm font-medium">
            {{ jobPosted(createdAt) }}
          </p>
        </div>
        <div class="items-center mt-2 flex">
          <div class="align-middle">
            <progressive-img
              class="w-24 mt-6 rounded mr-4 object-none object-center"
              :src="imageUrl"
              v-if="imageUrl != null"
            />
            <img
              src="@/assets/not_found.png"
              alt=""
              class=" mt-6 rounded mr-4 "
              v-else
            />
          </div>

          <div>
            <p class="text-xl font-semibold text-indigo-800">
              {{ company }}
            </p>
            <div class="flex mt-2 items-start">
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
              <p class="text-gray-500 text-xs md:text-sm font-medium md:mr-3">
                {{ location }}
              </p>
            </div>
          </div>
        </div>
        <div class="markdown" v-html="description"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "timeago.js";
export default {
  name: "Job",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
      createdAt: null,
      title: null,
      company: null,
      description: null,
      location: null,
      howToApply: null,
      imageUrl: null,
      jobType: null,
      url:
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/",
      job: {},
    };
  },
  created() {
    this.fetchJob();
  },
  methods: {
    fetchJob: function() {
      this.job = JSON.parse(sessionStorage.getItem("jobs")).filter(
        (jobs) => jobs.id === this.id
      );
      this.isLoading = true;
      this.createdAt = this.job[0].created_at;
      this.title = this.job[0].title;
      this.company = this.job[0].company;
      this.location = this.job[0].location;
      this.description = this.job[0].description;
      this.howToApply = this.job[0].how_to_apply;
      this.imageUrl = this.job[0].company_logo;
      this.jobType = this.job[0].type;
    },
    goBack() {
      this.$router.push("/");
    },
    jobPosted(cAt) {
      if (cAt) return format(cAt);
      else return null;
    },
  },
};
</script>

<style lang="postcss" scoped>
/* Additional vertical padding used by kbd tag. */
.py-05 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
.markdown {
  @apply text-indigo-800 text-sm w-4/5 leading-normal break-words;
}
.markdown >>> * + * {
  @apply mt-0 mb-4;
}

.markdown >>> p {
  @apply mt-4 mb-4;
}

.markdown >>> li >>> p {
  @apply mt-4 mb-4;
}
.markdown >>> li {
  @apply mt-4 mb-4;
}

.markdown >>> strong {
  @apply font-semibold;
}

.markdown >>> a {
  @apply text-blue-600 font-semibold;
}

.markdown strong a {
  @apply font-bold;
}

.markdown >>> h1 {
  @apply leading-tight border-b text-4xl font-semibold mb-4 mt-6 pb-2;
}

.markdown >>> h2 {
  @apply leading-tight border-b text-2xl font-semibold mb-4 mt-6 pb-2;
}

.markdown >>> h3 {
  @apply leading-snug text-lg font-semibold mb-4 mt-6;
}

.markdown >>> h4 {
  @apply leading-none text-sm font-semibold mb-4 mt-6;
}

.markdown >>> h5 {
  @apply leading-tight text-sm font-semibold mb-4 mt-6;
}

.markdown >>> h6 {
  @apply leading-tight text-sm font-semibold text-gray-600 mb-4 mt-6;
}

.markdown >>> blockquote {
  @apply text-base border-l-4 border-gray-300 pl-4 pr-4 text-gray-600;
}

.markdown >>> code {
  @apply font-mono text-sm inline bg-gray-200 rounded px-1 py-05;
}

.markdown >>> pre {
  @apply bg-gray-100 rounded p-4;
}

.markdown >>> pre code {
  @apply block bg-transparent p-0 overflow-visible rounded-none;
}

.markdown >>> ul {
  @apply text-sm pl-8 list-disc;
}

.markdown >>> ol {
  @apply text-sm pl-8 list-decimal;
}

.markdown >>> kbd {
  @apply text-xs inline-block rounded border px-1 py-05 align-middle font-normal font-mono shadow;
}

.markdown >>> table {
  @apply text-base border-gray-600;
}

.markdown >>> th {
  @apply border py-1 px-3;
}

.markdown >>> td {
  @apply border py-1 px-3;
}

/* Override pygments style background color. */
.markdown .highlight >>> pre {
  @apply bg-gray-100 !important;
}
</style>
