<template>
  <div id="addPicturePage">
    <h2 style="margin-bottom: 16px">{{ route.query.id ? '更新图片' : '创建图片' }}</h2>
    <PictureUpload :picture="picture" :onSuccess="onSuccess" />
    <a-form
      v-if="picture"
      name="pictureForm"
      layout="vertical"
      :model="pictureForm"
      @finish="handleSubmit"
    >
      <a-form-item name="name" label="名称">
        <a-input v-model:value="pictureForm.name" placeholder="请输入名称" allow-clear />
      </a-form-item>
      <a-form-item label="简介" name="introduction">
        <a-textarea
          v-model:value="pictureForm.introduction"
          placeholder="请输入简介"
          :auto-size="{ minRows: 2, maxSows: 5 }"
          allow-clear
        >
        </a-textarea>
      </a-form-item>
      <a-form-item label="分类" name="category">
        <a-auto-complete
          v-model:value="pictureForm.category"
          placeholder="情输入分类"
          allow-clear
          :options="categoryOptions"
        >
        </a-auto-complete>
      </a-form-item>
      <a-form-item label="标签" name="tags">
        <a-select
          v-model:value="pictureForm.tags"
          mode="tags"
          placeholder="请输入标签"
          allow-clear
          :options="tagOptions"
        ></a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" style="width: 100%">创建</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import PictureUpload from '@/components/PictureUpload.vue'
import { onMounted, reactive, ref } from 'vue'
import { message } from 'ant-design-vue'
import { userRegisterUsingPost } from '@/api/userController.ts'
import {
  editPictureUsingPost,
  getPictureByIdUsingGet,
  listPictureTagCategoryUsingGet,
} from '@/api/pictureController.ts'
import router from '@/router'
import { useRoute } from 'vue-router'

const pictureForm = reactive<API.PictureEditRequest>({})

/**
 * 提交表单
 * @param values
 */
const handleSubmit = async (values: any) => {
  const pictureId = picture.value?.id
  if (!pictureId) {
    return
  }
  const res = await editPictureUsingPost({
    id: pictureId,
    ...values,
  })
  if (res.data.code === 0 && res.data.data) {
    message.success('创建成功')
    router.push({ path: `/picture/${pictureId}` })
  } else {
    message.error('创建成功')
  }
}

const picture = ref<API.PictureVO>()

const onSuccess = (newPicture: API.PictureVO) => {
  picture.value = newPicture
  pictureForm.name = newPicture.name
}

const categoryOptions = ref<string[]>([])
const tagOptions = ref<string[]>([])

/**
 * 获取标签和分类
 * @param values
 */
const getTagCategoryOptions = async () => {
  const res = await listPictureTagCategoryUsingGet()
  // @ts-ignore
  if (res.data.code === 0 && res.data.data) {
    // @ts-ignore
    tagOptions.value = (res.data.data.tagList ?? []).map((data: string) => {
      return {
        value: data,
        label: data,
      }
    })
    // @ts-ignore
    categoryOptions.value = (res.data.data.categoryList ?? []).map((data: string) => {
      return {
        value: data,
        label: data,
      }
    })
  } else {
    message.error('创建成功')
  }
}

onMounted(() => {
  getTagCategoryOptions()
})

const route = useRoute()

const getOldPicture = async () => {
  const id = route.query?.id
  if (id) {
    const res = await getPictureByIdUsingGet({
      id,
    })
    if (res.data.code === 0 && res.data.data) {
      const data = res.data.data
      picture.value = data
      pictureForm.name = data.name
      pictureForm.introduction = data.introduction
      pictureForm.category = data.category
      pictureForm.tags = data.tags
    } else {
      message.error('获取数据失败')
    }
  }
}

onMounted(() => {
  getOldPicture()
})
</script>

<style scoped>
#addPicturePage {
  max-width: 720px;
  margin: 0 auto;
}
</style>
