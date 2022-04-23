<template>
  <div 
  :class="{ 'opacity-50':task.done }"
  class="border rounded mt-2 w-full flex items-center px-2 py-4 bg-slate-400 text-white">
    <p class="text-xl" :class="{'line-through':task.done}">
      {{ task.content }}
    </p>
    <div class="flex ml-auto">
      <button class="bg-green-500 rounded text-white px-4 py-1" @click="toggleDone">{{ task.done ? "Undo" : "Done" }}</button>
      <button class="bg-red-500 rounded text-white px-4 py-1 ml-2" @click="remove">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "nuxt-property-decorator";
import { TaskType } from "@/models/Todo";
import { todoStore } from "~/store";

@Component
export default class Task extends Vue {
  @Prop({ type: Object, required: true })
  task!: TaskType;

  toggleDone() {
    todoStore.toggleTask(this.task);
  }

  remove() {
    todoStore.removeTask(this.task);
  }
}
</script>