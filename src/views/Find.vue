<template>
  <div style="width:90%;margin: 0 5%;">
    <el-tabs v-model="tab">
      <el-tab-pane label="By IP" name="ip">
        <el-form>
          <div class="el-alert--error" v-if="errors.find">
            {{ errors.find.message }}
          </div>
          <el-form-item label="IP Address">
            <el-input v-model="ip"></el-input>
            <div v-if="errors.find && errors.find.errors.address" class="el-form-item__error">
              {{ errors.find.errors.address.join(', ') }}
            </div>
          </el-form-item>
          <el-button type="info" @click="findRecordByIP(ip)">Search</el-button>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="By URL" name="url">
        <el-form>
          <div class="el-alert--error" v-if="errors.findUrl">
            {{ errors.findUrl.message }}
          </div>
          <el-form-item label="URL">
            <el-input v-model="url"></el-input>
            <div v-if="errors.findUrl && errors.findUrl.errors.address" class="el-form-item__error">
              {{ errors.findUrl.errors.address.join(', ') }}
            </div>
          </el-form-item>
          <el-button type="info" @click="findRecordByUrl(url)">Search</el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    
    <el-row>
      <el-form v-if="ipData">
        <el-form-item label="Type">
          <el-input :disabled="true" v-model="ipData.type" />
        </el-form-item>
    
        <el-form-item label="IP Address">
          <el-input :disabled="true" v-model="ipData.ip" />
        </el-form-item>
    
        <el-form-item label="Continent Code">
          <el-input :disabled="true" v-model="ipData.continent_code" />
        </el-form-item>
    
        <el-form-item label="Continent Name">
          <el-input :disabled="true" v-model="ipData.continent_name" />
        </el-form-item>
    
        <el-form-item label="Country Code">
          <el-input :disabled="true" v-model="ipData.country_code" />
        </el-form-item>
    
        <el-form-item label="Country Name">
          <el-input :disabled="true" v-model="ipData.country_name" />
        </el-form-item>
    
        <el-form-item label="Region Code">
          <el-input :disabled="true" v-model="ipData.region_code" />
        </el-form-item>
    
        <el-form-item label="City">
          <el-input :disabled="true" v-model="ipData.city" />
        </el-form-item>
    
        <el-form-item label="ZIP">
          <el-input :disabled="true" v-model="ipData.zip" />
        </el-form-item>
  
      </el-form>
    </el-row>
  </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
  
    export default {
        name: "Find",
        computed: mapState(['ipData', 'errors']),
        methods: mapActions(['findRecordByIP', 'findRecordByUrl']),
        data() {
            return {
                tab: 'ip',
                ip: null,
                url: null,
            }
        }
    }
</script>

<style scoped>

</style>