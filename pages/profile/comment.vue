<template>
  <profile-body name="Ваши комментарии">
    <template #card>
      <div class="col-12">
        <comment-item />
      </div>
    </template>
  </profile-body>
</template>

<script>
import CommentItem from '../../components/profile/comment-item.vue'
import profileBody from '../../components/profile/profile-body.vue'
export default {
  components: { profileBody, CommentItem },
  name: 'CommentPage',
}
</script>
