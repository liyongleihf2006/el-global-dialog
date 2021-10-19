<script>
import {Dialog} from 'element-ui'
export default {
  components:{
    ElDialog:Dialog
  },
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '50%'
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '15vh'
    },
    modal: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    customClass: {
      type: String,
      default: ''
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    beforeClose: {
      type: Function,
      default: null
    },
    center: {
      type: Boolean,
      default: false
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    open: {
      type: Function,
      default: null
    },
    opened: {
      type: Function,
      default: null
    },
    close: {
      type: Function,
      default: null
    },
    closed: {
      type: Function,
      default: null
    },
    message: {
      type: Function,
      default() {
        return () => {
          return <span></span>
        }
      }
    },
    titleSlot: {
      type: Function,
      default() {
        return () => this.title
      }
    },
    footerSlot: {
      type: Function,
      default() {
        return () => {}
      }
    },
    data: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      visible: false
    }
  },
  render() {
    return (
      <el-dialog
        props={this.$props}
        visible={this.visible}
        destroy-on-close={true}
        on={{
          'update:visible': v => {
            this.visible = v
          }
        }}
        v-on:open={this.open.bind(this)}
        v-on:opened={this.opened.bind(this)}
        v-on:close={this.close.bind(this)}
        v-on:closed={this.closed.bind(this)}
      >
        <template slot='title'>{this.titleSlot(this)}</template>
        {this.message(this)}
        <template slot='footer'>{this.footerSlot(this)}</template>
      </el-dialog>
    )
  }
}
</script>

<style></style>
