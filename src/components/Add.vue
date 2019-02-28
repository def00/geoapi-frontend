<template>
  <el-dialog
      title="Add"
      :visible.sync="show"
      width="50%"
      :fullscreen="true"
  >
    <div>
      <el-form v-if="record">
        <div class="el-alert--error" v-if="errors.add">
          {{ errors.add.message }}
        </div>
        <el-form-item label="Type">
          <el-radio label="ipv4" v-model="record.type">IPv4</el-radio>
          <el-radio label="ipv6" v-model="record.type">IPv6</el-radio>
          <div v-if="errors.add && errors.add.errors.type" class="el-form-item__error">
            {{ errors.add.errors.type.join(', ') }}
          </div>
        </el-form-item>
  
        <el-form-item label="IP Address">
          <el-input v-model="record.ip" />
          <div v-if="errors.add && errors.add.errors.ip" class="el-form-item__error">
            {{ errors.add.errors.ip.join(', ') }}
          </div>
        </el-form-item>
        
        <el-form-item label="Continent Code">
          <el-input v-model="record.continent_code" />
          <div v-if="errors.add && errors.add.errors.continent_code" class="el-form-item__error">
            {{ errors.add.errors.continent_code.join(', ') }}
          </div>
        </el-form-item>
        
        <el-form-item label="Continent Name">
          <el-input v-model="record.continent_name" />
          <div v-if="errors.add && errors.add.errors.continent_name" class="el-form-item__error">
            {{ errors.add.errors.continent_name.join(', ') }}
          </div>
        </el-form-item>
        
        <el-form-item label="Country Code">
          <el-input v-model="record.country_code" />
          <div v-if="errors.add && errors.add.errors.country_code" class="el-form-item__error">
            {{ errors.add.errors.country_code.join(', ') }}
          </div>
        </el-form-item>
        
        <el-form-item label="Country Name">
          <el-input v-model="record.country_name" />
          <div v-if="errors.add && errors.add.errors.country_name" class="el-form-item__error">
            {{ errors.add.errors.country_name.join(', ') }}
          </div>
        </el-form-item>
        
        <el-form-item label="Region Code">
          <el-input v-model="record.region_code" />
          <div v-if="errors.add && errors.add.errors.region_code" class="el-form-item__error">
            {{ errors.add.errors.region_code.join(', ') }}
          </div>
        </el-form-item>
        
        <el-form-item label="City">
          <el-input v-model="record.city" />
          <div v-if="errors.add && errors.add.errors.city" class="el-form-item__error">
            {{ errors.add.errors.city.join(', ') }}
          </div>
        </el-form-item>
        
        <el-form-item label="ZIP">
          <el-input v-model="record.zip" />
          <div v-if="errors.add && errors.add.errors.zip" class="el-form-item__error">
            {{ errors.add.errors.zip.join(', ') }}
          </div>
        </el-form-item>
      
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="hide()">Cancel</el-button>
    <el-button type="primary" @click="add(record)">Confirm</el-button>
  </span>
  </el-dialog>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        name: "Add",
        props: ['show'],
        computed: mapState(['errors']),
        data() {
            return {
                record: {
                    ip: null,
                    type: 'ipv4',
                    continent_code: null,
                    continent_name: null,
                    country_code: null,
                    country_name: null,
                    region_code: null,
                    city: null,
                    zip: null,
                }
            }
        },
        methods: {
            ...mapActions(['addRecord']),
            hide() {
                this.$emit('hide');
            },
            add(data) {
                this.addRecord(data).then(this.hide);
            }
        }
    }
</script>

<style scoped>

</style>