<template>
  <div class="container">
    <div class="uploader-area">
      <Uploader @upload="onUploadImage" />
    </div>
    <div class="image-list-area">
      <div v-if="allImages.length > 0">
        <ImageItem
          v-for="img in allImages"
          :progress="img.progress"
          :thumb="img.thumb"
          :filename="img.filename"
        />
      </div>
      <div class="image-list-empty" v-else>上传列表为空</div>
    </div>
  </div>
</template>

<script setup>
import Uploader from '@/components/Uploader.vue';
import ImageItem from '@/components/ImageItem.vue';
import { ref } from 'vue';
import { uploadImages } from '../../request';

const allImages = ref([]);
const onUploadImage = (newImages) => {
  console.log('onUploadImage', newImages);
  newImages.forEach(async (file, index) => {
    allImages.value.push({
      filename: file.name,
      progress: 0,
      thumb: window.URL.createObjectURL(file)
    });
    await uploadImages(file);
  });
};
</script>

<style scoped>
.container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
}
.uploader-area {
  padding: 20px;
  flex: none;
}
.image-list-area {
  flex: auto;
  padding: 20px;
  overflow: auto;
  border-left: 1px solid #eee;
}
.image-list-empty {
  text-align: center;
}
</style>
