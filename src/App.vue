<template lang="pug">
v-app
  v-layout
    //- navigation
    v-main
      router-view
  v-snackbar(variant="text" v-model="showSnack" :timeout="expireMillisecond" @update:model-value="(val) => !val && snackStore.clear()")
    template(v-slot:default)
      v-alert(:type="snackStore.snackType" :title="snackStore.snackType" @click:close="closeSnack") {{ errorMessage }}
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import { useSnackStore } from '@/stores/snack'
import { useRoute } from 'vue-router'

const route = useRoute()
const snackStore = useSnackStore()

const hasContent = computed(() => snackStore.hasContent)
const errorMessage = computed(() => snackStore.message)
const expireMillisecond = computed(() => snackStore.expireSecond * 1000)

const showSnack = ref(false)

watch(hasContent, (val) => val ? showSnack.value = true : null)

function closeSnack() {
  showSnack.value = false
}

</script>
