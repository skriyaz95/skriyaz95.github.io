<template>
  <footer class="footer">
    <div>
      {{user.name}} | <a :href="email(user.email)"> {{ user.email }} </a> | <a :href="phone(user.phone)"> {{ user.phone }} </a> | {{ user.city }}
    </div>
    <SocialBar :user="user" :links="links"/>
  </footer>
</template>

<script>
import SocialBar from './SocialBar'

export default {
  name: 'Footer',
  props: ['user', 'links'],
  components: {
    SocialBar,
  },
  methods: {
    email(email) {
      return 'mailto:' + email;
    },
    phone(phone) {
      return 'callto:' + phone;
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/styles/constants.scss';

  $bg-footer: map-get($colors, primary) !default;

  .footer {
    padding: 10px 20px 10px 20px;
    background-color: $bg-footer;
    color: map-get($colors, light);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copyright-icon{
      font-size: 1.5rem;
      vertical-align: middle;
  }

  /deep/ .social-wrap {
    float: right;
    .icon {
      font-size: 2.8rem;
      &:hover {
        color: map-get($colors, light);
      }
    }
  }

  /deep/ li{
      margin-bottom: 0 !important;
  }

</style>
