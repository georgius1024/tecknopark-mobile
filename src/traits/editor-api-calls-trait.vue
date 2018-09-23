<script type="text/babel">
  import _ from 'lodash'
  import { addTrailingSlash } from '@/lib/helpers.js'
  import Api from '@/api'

  import { mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    data () {
      return {
        primaryId: '',
        primaryFieldName: 'id',
        action: '',
        apiEntry: '',
        modelData: {},
        originalData: {},
        errorsData: {}
      }
    },
    computed: {
      formData () {
        return _.get(this, 'form', {})
      },
      changedFields () {
        let result = []
        for (let field in this.modelData) {
          if (this.modelData.hasOwnProperty(field)) {
            let actualValue = _.get(this.formData, field, '')
            let originalValue = _.get(this.originalData, field, '')
            if (!_.isEqual(originalValue, actualValue)) {
              result.push({
                field,
                actual: actualValue,
                original: originalValue
              })
              // console.log(field + ' is dirty: ' + originalValue + ' not equal ' + actualValue)
            } else {
              // console.log(field, 'is clean:' + originalValue + ' equal ' + actualValue)
            }
          }
        }
        return result
      },

      formIsDirty () {
        return this.changedFields.length > 0
      },
      ...mapGetters([])
    },
    created () {
      let formData = this.formData
      this.modelData = _.cloneDeep(formData)
    },
    methods: {
      clearErrors () {
        this.errorsData = []
        /*
        for (let field in this.modelData) {
          if (this.modelData.hasOwnProperty(field)) {
            this.errorsData[field] = undefined
          }
        }
        */
      },
      errors (field) {
        if (Array.isArray(this.errorsData)) {
          return this.errorsData
            .filter(e => {
              return e.field === field
            })
            .map(e => {
              return e.message
            })
        }
      },
      fieldIsDirty (field) {
        let actualValue = _.get(this.formData, field, '')
        let originalValue = _.get(this.originalData, field, '')
        if (!_.isEqual(originalValue, actualValue)) {
          return true
        } else {
          return false
        }
      },
      loadData () {
        return new Promise((resolve, reject) => {
          if (this.action === 'update') {
            Api.rest({
              url: addTrailingSlash(this.apiEntry) + this.primaryId,
              method: 'get'
            })
              .then(response => {
                this.form = response.data
                this.updateOriginalData()
                this.clearErrors()
                resolve(this.formData)
              })
              .catch(error => {
                console.log(error)
                reject(error)
              })
          } else {
            this.clearForm()
            this.updateOriginalData()
            this.clearErrors()
            resolve(this.formData)
          }
        })
      },
      updateOriginalData () {
        this.originalData = _.cloneDeep(this.form)
      },
      clearForm () {
        this.form = _.cloneDeep(this.modelData)
      },
      submitData (data) {
        return new Promise((resolve, reject) => {
          let query
          if (this.action === 'update') {
            query = addTrailingSlash(this.apiEntry) + this.primaryId
          } else {
            query = this.apiEntry
          }
          if (this.onBeforeSave) {
            this.onBeforeSave(data)
          }
          Api.rest({
            url: query,
            method: this.action === 'update' ? 'put' : 'post',
            data: data
          })
            .then(response => {
              if (this.action === 'create') {
                this.form = _.cloneDeep(response.data)
                this.primaryId = _.get(this, 'form.' + this.primaryFieldName)
              }
              if (this.onAfterSave) {
                this.onAfterSave()
              }
              this.updateOriginalData()
              resolve(this.formData)
            })
            .catch(error => {
              this.errorsData = _.get(error, 'response.data.errors', [])
              reject(error)
            })
        })
      },
      submitForm () {
        return this.submitData(_.clone(this.form))
      },
      ...mapMutations([]),
      ...mapActions([])
    }
  }
</script>