<script lang="ts" setup name="<%= displayName %>">
import { Props } from './props'

const prop = defineProps(Props)
</script>

<template>
	<div class="<%= name %>"><%= displayName %></div>
</template>
