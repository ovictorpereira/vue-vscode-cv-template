<template>
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    class="file-icon"
    xmlns="http://www.w3.org/2000/svg"
    v-if="icon === 'info'"
  >
    <circle cx="8" cy="8" r="7" stroke="#42a5f5" stroke-width="1.5" fill="transparent" />
    <path
      d="M8 4.5C8.55 4.5 9 4.95 9 5.5C9 6.05 8.55 6.5 8 6.5C7.45 6.5 7 6.05 7 5.5C7 4.95 7.45 4.5 8 4.5ZM7 12V8H9V12H7Z"
      fill="#42a5f5"
    />
  </svg>

  <svg
    v-if="icon === 'github'"
    width="14"
    height="14"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class="file-icon"
    style="transform: rotate(0deg)"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"
    ></path>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  icon: string
}

defineProps<Props>()
</script>

<style scoped>
.file-icon {
  min-width: 14px;
  min-height: 14px;
  flex-shrink: 0;
}
</style>
