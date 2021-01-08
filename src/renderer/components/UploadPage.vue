<template>
  <section class="index-page">
    <section class="uploader-container">
      <section class="title">Upload</section>
      <section
        class="upload-box"
        :class="{ 'is-dragover': dragover }"
        @click="onClickUpload"
        @drop.prevent="onDrop"
        @dragover.prevent="dragover = true"
        @dragleave.prevent="dragover = false"
      >
        <section class="icon"><i class="fas fa-upload"></i></section>
        <section class="text">Click to Upload</section>
        <input type="file" id="file-uploader" @change="onChangeFile" multiple />
      </section>
      <section class="link-box">
        <section class="title">Link</section>
        <section class="links">
          <section
            class="item"
            :class="idxChosen === 1 ? 'chosen' : ''"
            @click="onChosen(1)"
          >
            Markdown
          </section>
          <section
            class="item"
            :class="idxChosen === 2 ? 'chosen' : ''"
            @click="onChosen(2)"
          >
            HTML
          </section>
          <section
            class="item"
            :class="idxChosen === 3 ? 'chosen' : ''"
            @click="onChosen(3)"
          >
            URL
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import api from '../../api/oss'
export default {
  name: "UploadPage",
  components: {},
  data() {
    return {
      dragover: false,
      idxChosen: 1,
    };
  },
  mounted() {
  },
  methods: {
    onChosen(idx) {
      this.idxChosen = idx;
    },
    onClickUpload() {
      document.getElementById("file-uploader").click();
    },
    onChangeFile(e) {
      let files = e.target.files;
      console.log('onChangeFile',files)
       api.putUploadFiles(files)
      //reset input value
      document.getElementById("file-uploader").value = "";
     
    },
  },
};
</script>

<style lang="less" scoped>
@darwinbg:transparentify (#172426, #000, 0.7);
.index-page {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  user-select: none;
  overflow: hidden;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #585858;
  color: #eee;
  .title {
    font-size: 20px;
    text-align: center;
    margin: 10px 0;
  }
  .uploader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .upload-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        font-size: 66px;
        margin: 50px 0 16px;
        line-height: 66px;
      }

      width: 450px;
      height: 220px;
      border: 2px dashed #dddddd;
      border-radius: 8px;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      #file-uploader {
        display: none;
      }
    }
    .upload-box:hover,
    .upload-box.dragover {
      border: 2px dashed #a4d8fa;
      background-color: rgba(164, 216, 250, 0.3);
      color: #fff;
    }

    .link-box {
      display: flex;
      flex-direction: column;
      margin-top: 16px;
      font-size: 12px;
      color: #eeeeee;
      margin-bottom: 4px;
      .title {
        font-size: 12px;
      }
      .links {
        display: flex;

        color: #606266;

        .item {
          padding: 12px 20px;
          line-height: 1;
          white-space: nowrap;
          vertical-align: middle;
          background-color: #fafbfc;

          border-right: 1px solid #dcdfe6;

          font-size: 14px;
          font-weight: 500;

          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        .item:first-child {
          border-top-left-radius: 14px;
          border-bottom-left-radius: 14px;
        }
        .item:last-child {
          border-top-right-radius: 14px;
          border-bottom-right-radius: 14px;
          border: transparent;
        }
        .item:hover {
          color: #409eff;
        }
        .item.chosen {
          color: #fff;
          background-color: #409eff;
          border-color: #409eff;
          box-shadow: -1px 0 0 0 #409eff;
        }
      }
    }
  }
}
</style>