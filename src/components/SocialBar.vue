 <template>
  <div class="social-wrap">
    <ul>
      <li>
        <a :href="links.metadata.facebook" target="_blank">
          <font-awesome-icon class="icon" :icon="['fab', 'facebook-square']" />
        </a>
      </li>
      <li>
        <a :href="links.metadata.linkedin" target="_blank">
          <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
        </a>
      </li>
      <li>
        <a :href="links.metadata.github" target="_blank">
          <font-awesome-icon class="icon" :icon="['fab', 'github-square']" />
        </a>
      </li>
      <li>
        <a :href="getUrl(user.resume)" target="_blank" download>
          <font-awesome-icon class="icon" icon="file-alt"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'SocialBar',
        props: ['user', 'links'],
        methods: {
          getUrl(file) {
            return require('../assets/resume/' + file);
          },
      }
    }
</script>

<style scoped lang="scss">
  @import '@/styles/constants.scss';
 .social-wrap {
    li {
      display: inline-block;
      margin-right: 10px;
    }
    .icon {
      font-size: 3rem;
      color: #3C6E71;
    }

    .icon:hover {
      color: #3C6E71
    }

  }
</style>
