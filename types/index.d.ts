import Vue, { VNode } from "vue";
/** Informs users while preserving the current page state */
export interface ElGlobalDialog extends Vue {
  data?: object;
  /** Content of the MessageBox */
  message?: VNode;
  titleSlot?: (instance: ElGlobalDialogComponent) => VNode;
  footerSlot?: (instance: ElGlobalDialogComponent) => VNode;
  open?: (instance: ElGlobalDialogComponent) => void;
  opened?: (instance: ElGlobalDialogComponent) => void;
  close?: (instance: ElGlobalDialogComponent) => void;
  closed?: (instance: ElGlobalDialogComponent) => void;

  /** Title of Dialog */
  title?: string;

  /** Width of Dialog */
  width?: string;

  /** Whether the Dialog takes up full screen */
  fullscreen?: boolean;

  /** Value for margin-top of Dialog CSS */
  top?: string;

  /** Whether a mask is displayed */
  modal?: boolean;

  /** Whether scroll of body is disabled while Dialog is displayed */
  lockScroll?: boolean;

  /** Custom class names for Dialog */
  customClass?: string;

  /** Whether the Dialog can be closed by clicking the mask */
  closeOnClickModal?: boolean;

  /** Whether the Dialog can be closed by pressing ESC */
  closeOnPressEscape?: boolean;

  /** Whether to show a close button */
  showClose?: boolean;

  /** Callback before Dialog closes, and it will prevent Dialog from closing */
  beforeClose?: (done: Function) => void;

  /** Whether to align the header and footer in center */
  center?: boolean;
}
export interface ElGlobalDialogComponent extends ElGlobalDialog {
  visible: boolean;
}
declare module "vue/types/vue" {
  interface Vue {
    /** Show a dialog box */
    $dialog: ElGlobalDialog;
  }
}
