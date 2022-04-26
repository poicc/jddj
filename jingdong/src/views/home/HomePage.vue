<template>
  <div class="warpper">
    <StaticPart />
  </div>
  <AppDocker :currentIndex="0" />
</template>

<script>
import StaticPart from "./StaticPart";
import AppDocker from "../../components/AppDocker";

export default {
  name: "HomePage",
  components: {
    StaticPart,
    AppDocker,
  },
};
</script>

<style lang="scss" scoped>
.warpper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem 0.1rem 0.18rem;
}
</style>