<template>
  switch parent border:
  <el-switch v-model="parentBorder" />
  switch child border
  <el-switch v-model="childBorder" />
  <el-table :data="tableData" :border="parentBorder" style="width: 100%">
    <el-table-column type="expand">
      <template #default="props">
        <!--        <el-table :data="tableData" border>
                  <el-table-column label="Date" prop="date"/>
                  <el-table-column label="Name" prop="name"/>
                </el-table>-->
        <VirtualScrollTable />
        <!--        <el-table-column label="address" prop="address"></el-table-column>-->
      </template>
    </el-table-column>
    <el-table-column label="Date" prop="date" />
    <el-table-column label="Name" prop="name" />
  </el-table>

  <VirtualScrollTable />
</template>

<script lang="ts" setup>
  import VirtualScrollTable from '@/views/About/components/VirtualScrollTable.vue'
  import { ref } from 'vue'

  const parentBorder = ref(false)
  const childBorder = ref(false)
  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'San Francisco',
      address: '3650 21st St, San Francisco',
      zip: 'CA 94114',
      family: [
        {
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
      ],
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      city: 'San Francisco',
      address: '3650 21st St, San Francisco',
      zip: 'CA 94114',
      family: [
        {
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
      ],
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      state: 'California',
      city: 'San Francisco',
      address: '3650 21st St, San Francisco',
      zip: 'CA 94114',
      family: [
        {
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
      ],
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      state: 'California',
      city: 'San Francisco',
      address: '3650 21st St, San Francisco',
      zip: 'CA 94114',
      family: [
        {
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
      ],
    },
    {
      date: '2016-05-08',
      name: 'Tom',
      state: 'California',
      city: 'San Francisco',
      address: '3650 21st St, San Francisco',
      zip: 'CA 94114',
      family: [
        {
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
      ],
    },
    {
      date: '2016-05-06',
      name: 'Tom',
      state: 'California',
      city: 'San Francisco',
      address: '3650 21st St, San Francisco',
      zip: 'CA 94114',
      family: [
        {
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
      ],
    },
    {
      date: '2016-05-07',
      name: 'Tom',
      state: 'California',
      city: 'San Francisco',
      address: '3650 21st St, San Francisco',
      zip: 'CA 94114',
      family: [
        {
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
      ],
    },
  ]
</script>
