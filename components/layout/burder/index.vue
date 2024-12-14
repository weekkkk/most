<script lang="ts" setup>
const isOpen = ref(false);
</script>

<template>
  <ul>
    <li>
      <UiButton>меню</UiButton>

      <ul>
        <li>
          <UiButton>закрыть</UiButton>

          <ul class="">
            <li>
              <UiMenu header="ремонт" :items="['сумки', 'обувь']" />
            </li>
            <li>
              <UiMenu header="ремонт" :items="['сумки', 'обувь']" />
            </li>
            <li>
              <UiMenu header="ремонт" :items="['сумки', 'обувь']" />
            </li>
            <li>
              <UiMenu header="ремонт" :items="['сумки', 'обувь']" />
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>
