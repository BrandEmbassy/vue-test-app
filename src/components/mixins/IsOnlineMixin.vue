<script>
export default {
  name: 'IsOnlineMixin',

  methods: {
    isOnlineTitle(value) {
      return value ? 'Online' : 'Offline';
    }
  }
};
</script>
