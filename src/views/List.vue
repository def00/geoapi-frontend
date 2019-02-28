<template>
  <div style="width: 100%">
    <el-table :data="myRecords" style="width: 100%">
      <el-table-column prop="ip" label="IP Address" sortable column-key="ip" />
      <el-table-column prop="type" label="Address Type" sortable column-key="type" />
      <el-table-column prop="country_code" label="Country" sortable column-key="country_code" />
      <el-table-column prop="city" label="City" sortable column-key="city" />
      <el-table-column label="Operations">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.row)">Edit</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="deleteRecord(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
      
    </el-table>
    
    <el-button type="info" @click="showAdd = true" style="margin-top: 15px;">Add record</el-button>
    <Edit v-bind:show="show" v-bind:record="record" @hide="show = false;" />
    <Add v-bind:show="showAdd" @hide="showAdd = false"/>
  </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import Edit from "../components/Edit";
    import Add from "../components/Add";
  
    export default {
        name: "List",
        components: {Edit, Add},
        computed: mapGetters(['myRecords']),
        methods: {
            ...mapActions(['deleteRecord']),
            handleEdit(row) {
                this.record = row;
                this.show = true;
            }
        },
        mounted () {
            this.$store.dispatch('getRecords');
        },
        data() {
            return {
                show: false,
                record: null,
                showAdd: false,
            }
        }
    }
</script>

<style scoped>

</style>