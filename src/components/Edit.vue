<template>
  <el-dialog
      title="Edit"
      :visible.sync="show"
      width="50%"
      :fullscreen="true"
     >
    <div>
      <el-form v-if="record">
        <div class="el-alert--error" v-if="errors.edit">
          {{ errors.edit.message }}
        </div>
        <el-form-item label="Type">
          <el-radio value="ipv4" label="IPv4" v-model="record.type" />
          <el-radio value="ipv6" label="IPv6" v-model="record.type" />
          <div v-if="errors.edit && errors.edit.errors.type" class="el-form-item__error">
            {{ errors.edit.errors.type.join(', ') }}
          </div>
        </el-form-item>
        
        <el-form-item label="Continent Code">
          <el-input v-model="record.continent_code" />
          <div v-if="errors.edit && errors.edit.errors.continent_code" class="el-form-item__error">
            {{ errors.edit.errors.continent_code.join(', ') }}
          </div>
        </el-form-item>
        
        <el-form-item label="Continent Name">
          <el-input v-model="record.continent_name" />
          <div v-if="errors.edit && errors.edit.errors.continent_name" class="el-form-item__error">
            {{ errors.edit.errors.continent_name.join(', ') }}
          </div>
        </el-form-item>
        
        <el-form-item label="Country Code">
          <el-input v-model="record.country_code" />
          <div v-if="errors.edit && errors.edit.errors.country_code" class="el-form-item__error">
            {{ errors.edit.errors.country_code.join(', ') }}
          </div>
        </el-form-item>
        
        <el-form-item label="Country Name">
          <el-input v-model="record.country_name" />
          <div v-if="errors.edit && errors.edit.errors.country_name" class="el-form-item__error">
            {{ errors.edit.errors.country_name.join(', ') }}
          </div>
        </el-form-item>
        
        <el-form-item label="Region Code">
          <el-input v-model="record.region_code" />
          <div v-if="errors.edit && errors.edit.errors.region_code" class="el-form-item__error">
            {{ errors.edit.errors.region_code.join(', ') }}
          </div>
        </el-form-item>
  
        <el-form-item label="City">
          <el-input v-model="record.city" />
          <div v-if="errors.edit && errors.edit.errors.city" class="el-form-item__error">
            {{ errors.edit.errors.city.join(', ') }}
          </div>
        </el-form-item>
  
        <el-form-item label="ZIP">
          <el-input v-model="record.zip" />
          <div v-if="errors.edit && errors.edit.errors.zip" class="el-form-item__error">
            {{ errors.edit.errors.zip.join(', ') }}
          </div>
        </el-form-item>
        
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="hide()">Cancel</el-button>
    <el-button type="primary" @click="edit(record)">Confirm</el-button>
  </span>
  </el-dialog>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
    export default {
        name: "Edit",
        props: ['record', 'show'],
        computed: mapState(['errors']),
        methods: {
          ...mapActions(['editRecord']),
          hide() {
              this.$emit('hide');
          },
          edit(data) {
              this.editRecord(data).then(this.hide);
          }
        }
    }
</script>

<style scoped>

</style>