<template>
    <div>
        <cabeza></cabeza>
        <sectionIndex></sectionIndex>
        <pie></pie>
  </div>
</template>

<script>
import cabeza       from '../components/HeaderLogout';
import pie          from '../components/Footer';
import sectionIndex from '../components/SectionIndex'

export default {
  components:{cabeza,pie, sectionIndex},
}
</script>