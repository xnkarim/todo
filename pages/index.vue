<template>
  <main class="container flex flex-col items-center p-4">
    <h1 class="text-3xl">TODO</h1>
    <div class="mt-4">
      <input
        class="focus:outline-none p-1"
        type="text"
        v-model="taskText"
        @keypress.enter="addTask"
      />
      <button
        class="bg-sky-600 rounded text-white px-4 py-1 ml-2"
        @click="addTask"
      >
        Add
      </button>
    </div>
    <div class="mt-5 w-1/2">
      <Task v-for="task in tasks" :key="task.content" :task="task" />
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { todoStore } from "~/store";

@Component
export default class Index extends Vue {
  taskText: string = "";

  get tasks() {
    return todoStore.tasks;
  }

  addTask() {
    if (this.taskText) {
      todoStore.addTask(this.taskText);
      this.taskText = "";
    }
  }
}
</script>
