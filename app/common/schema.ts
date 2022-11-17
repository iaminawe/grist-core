/*** THIS FILE IS AUTO-GENERATED BY core/sandbox/gen_js_schema.py ***/

import { GristObjCode } from "app/plugin/GristData";

// tslint:disable:object-literal-key-quotes

export const SCHEMA_VERSION = 34;

export const schema = {

  "_grist_DocInfo": {
    docId               : "Text",
    peers               : "Text",
    basketId            : "Text",
    schemaVersion       : "Int",
    timezone            : "Text",
    documentSettings    : "Text",
  },

  "_grist_Tables": {
    tableId             : "Text",
    primaryViewId       : "Ref:_grist_Views",
    summarySourceTable  : "Ref:_grist_Tables",
    onDemand            : "Bool",
    rawViewSectionRef   : "Ref:_grist_Views_section",
  },

  "_grist_Tables_column": {
    parentId            : "Ref:_grist_Tables",
    parentPos           : "PositionNumber",
    colId               : "Text",
    type                : "Text",
    widgetOptions       : "Text",
    isFormula           : "Bool",
    formula             : "Text",
    label               : "Text",
    untieColIdFromLabel : "Bool",
    summarySourceCol    : "Ref:_grist_Tables_column",
    displayCol          : "Ref:_grist_Tables_column",
    visibleCol          : "Ref:_grist_Tables_column",
    rules               : "RefList:_grist_Tables_column",
    recalcWhen          : "Int",
    recalcDeps          : "RefList:_grist_Tables_column",
  },

  "_grist_Imports": {
    tableRef            : "Ref:_grist_Tables",
    origFileName        : "Text",
    parseFormula        : "Text",
    delimiter           : "Text",
    doublequote         : "Bool",
    escapechar          : "Text",
    quotechar           : "Text",
    skipinitialspace    : "Bool",
    encoding            : "Text",
    hasHeaders          : "Bool",
  },

  "_grist_External_database": {
    host                : "Text",
    port                : "Int",
    username            : "Text",
    dialect             : "Text",
    database            : "Text",
    storage             : "Text",
  },

  "_grist_External_table": {
    tableRef            : "Ref:_grist_Tables",
    databaseRef         : "Ref:_grist_External_database",
    tableName           : "Text",
  },

  "_grist_TableViews": {
    tableRef            : "Ref:_grist_Tables",
    viewRef             : "Ref:_grist_Views",
  },

  "_grist_TabItems": {
    tableRef            : "Ref:_grist_Tables",
    viewRef             : "Ref:_grist_Views",
  },

  "_grist_TabBar": {
    viewRef             : "Ref:_grist_Views",
    tabPos              : "PositionNumber",
  },

  "_grist_Pages": {
    viewRef             : "Ref:_grist_Views",
    indentation         : "Int",
    pagePos             : "PositionNumber",
  },

  "_grist_Views": {
    name                : "Text",
    type                : "Text",
    layoutSpec          : "Text",
  },

  "_grist_Views_section": {
    tableRef            : "Ref:_grist_Tables",
    parentId            : "Ref:_grist_Views",
    parentKey           : "Text",
    title               : "Text",
    defaultWidth        : "Int",
    borderWidth         : "Int",
    theme               : "Text",
    options             : "Text",
    chartType           : "Text",
    layoutSpec          : "Text",
    filterSpec          : "Text",
    sortColRefs         : "Text",
    linkSrcSectionRef   : "Ref:_grist_Views_section",
    linkSrcColRef       : "Ref:_grist_Tables_column",
    linkTargetColRef    : "Ref:_grist_Tables_column",
    embedId             : "Text",
    rules               : "RefList:_grist_Tables_column",
  },

  "_grist_Views_section_field": {
    parentId            : "Ref:_grist_Views_section",
    parentPos           : "PositionNumber",
    colRef              : "Ref:_grist_Tables_column",
    width               : "Int",
    widgetOptions       : "Text",
    displayCol          : "Ref:_grist_Tables_column",
    visibleCol          : "Ref:_grist_Tables_column",
    filter              : "Text",
    rules               : "RefList:_grist_Tables_column",
  },

  "_grist_Validations": {
    formula             : "Text",
    name                : "Text",
    tableRef            : "Int",
  },

  "_grist_REPL_Hist": {
    code                : "Text",
    outputText          : "Text",
    errorText           : "Text",
  },

  "_grist_Attachments": {
    fileIdent           : "Text",
    fileName            : "Text",
    fileType            : "Text",
    fileSize            : "Int",
    imageHeight         : "Int",
    imageWidth          : "Int",
    timeDeleted         : "DateTime",
    timeUploaded        : "DateTime",
  },

  "_grist_Triggers": {
    tableRef            : "Ref:_grist_Tables",
    eventTypes          : "ChoiceList",
    isReadyColRef       : "Ref:_grist_Tables_column",
    actions             : "Text",
  },

  "_grist_ACLRules": {
    resource            : "Ref:_grist_ACLResources",
    permissions         : "Int",
    principals          : "Text",
    aclFormula          : "Text",
    aclColumn           : "Ref:_grist_Tables_column",
    aclFormulaParsed    : "Text",
    permissionsText     : "Text",
    rulePos             : "PositionNumber",
    userAttributes      : "Text",
  },

  "_grist_ACLResources": {
    tableId             : "Text",
    colIds              : "Text",
  },

  "_grist_ACLPrincipals": {
    type                : "Text",
    userEmail           : "Text",
    userName            : "Text",
    groupName           : "Text",
    instanceId          : "Text",
  },

  "_grist_ACLMemberships": {
    parent              : "Ref:_grist_ACLPrincipals",
    child               : "Ref:_grist_ACLPrincipals",
  },

  "_grist_Filters": {
    viewSectionRef      : "Ref:_grist_Views_section",
    colRef              : "Ref:_grist_Tables_column",
    filter              : "Text",
    pinned              : "Bool",
  },

  "_grist_Cells": {
    tableRef            : "Ref:_grist_Tables",
    colRef              : "Ref:_grist_Tables_column",
    rowId               : "Int",
    root                : "Bool",
    parentId            : "Ref:_grist_Cells",
    type                : "Int",
    content             : "Text",
    userRef             : "Text",
  },

};

export interface SchemaTypes {

  "_grist_DocInfo": {
    docId: string;
    peers: string;
    basketId: string;
    schemaVersion: number;
    timezone: string;
    documentSettings: string;
  };

  "_grist_Tables": {
    tableId: string;
    primaryViewId: number;
    summarySourceTable: number;
    onDemand: boolean;
    rawViewSectionRef: number;
  };

  "_grist_Tables_column": {
    parentId: number;
    parentPos: number;
    colId: string;
    type: string;
    widgetOptions: string;
    isFormula: boolean;
    formula: string;
    label: string;
    untieColIdFromLabel: boolean;
    summarySourceCol: number;
    displayCol: number;
    visibleCol: number;
    rules: [GristObjCode.List, ...number[]]|null;
    recalcWhen: number;
    recalcDeps: [GristObjCode.List, ...number[]]|null;
  };

  "_grist_Imports": {
    tableRef: number;
    origFileName: string;
    parseFormula: string;
    delimiter: string;
    doublequote: boolean;
    escapechar: string;
    quotechar: string;
    skipinitialspace: boolean;
    encoding: string;
    hasHeaders: boolean;
  };

  "_grist_External_database": {
    host: string;
    port: number;
    username: string;
    dialect: string;
    database: string;
    storage: string;
  };

  "_grist_External_table": {
    tableRef: number;
    databaseRef: number;
    tableName: string;
  };

  "_grist_TableViews": {
    tableRef: number;
    viewRef: number;
  };

  "_grist_TabItems": {
    tableRef: number;
    viewRef: number;
  };

  "_grist_TabBar": {
    viewRef: number;
    tabPos: number;
  };

  "_grist_Pages": {
    viewRef: number;
    indentation: number;
    pagePos: number;
  };

  "_grist_Views": {
    name: string;
    type: string;
    layoutSpec: string;
  };

  "_grist_Views_section": {
    tableRef: number;
    parentId: number;
    parentKey: string;
    title: string;
    defaultWidth: number;
    borderWidth: number;
    theme: string;
    options: string;
    chartType: string;
    layoutSpec: string;
    filterSpec: string;
    sortColRefs: string;
    linkSrcSectionRef: number;
    linkSrcColRef: number;
    linkTargetColRef: number;
    embedId: string;
    rules: [GristObjCode.List, ...number[]]|null;
  };

  "_grist_Views_section_field": {
    parentId: number;
    parentPos: number;
    colRef: number;
    width: number;
    widgetOptions: string;
    displayCol: number;
    visibleCol: number;
    filter: string;
    rules: [GristObjCode.List, ...number[]]|null;
  };

  "_grist_Validations": {
    formula: string;
    name: string;
    tableRef: number;
  };

  "_grist_REPL_Hist": {
    code: string;
    outputText: string;
    errorText: string;
  };

  "_grist_Attachments": {
    fileIdent: string;
    fileName: string;
    fileType: string;
    fileSize: number;
    imageHeight: number;
    imageWidth: number;
    timeDeleted: number;
    timeUploaded: number;
  };

  "_grist_Triggers": {
    tableRef: number;
    eventTypes: [GristObjCode.List, ...string[]]|null;
    isReadyColRef: number;
    actions: string;
  };

  "_grist_ACLRules": {
    resource: number;
    permissions: number;
    principals: string;
    aclFormula: string;
    aclColumn: number;
    aclFormulaParsed: string;
    permissionsText: string;
    rulePos: number;
    userAttributes: string;
  };

  "_grist_ACLResources": {
    tableId: string;
    colIds: string;
  };

  "_grist_ACLPrincipals": {
    type: string;
    userEmail: string;
    userName: string;
    groupName: string;
    instanceId: string;
  };

  "_grist_ACLMemberships": {
    parent: number;
    child: number;
  };

  "_grist_Filters": {
    viewSectionRef: number;
    colRef: number;
    filter: string;
    pinned: boolean;
  };

  "_grist_Cells": {
    tableRef: number;
    colRef: number;
    rowId: number;
    root: boolean;
    parentId: number;
    type: number;
    content: string;
    userRef: string;
  };

}
