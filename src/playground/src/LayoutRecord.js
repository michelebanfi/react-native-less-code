/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import { Record, List } from 'immutable';
import type { RecordOf } from 'immutable';
import PositionRecord from './PositionRecord';
import type { PositionRecordT } from './PositionRecord';
import yoga from 'yoga-layout/dist/entry-browser';

import type {
  Yoga$Align,
  Yoga$JustifyContent,
  Yoga$FlexDirection,
  Yoga$FlexWrap,
  Yoga$PositionType,
} from 'yoga-layout';

export type LayoutRecordT = RecordOf<{
  width?: ?number,
  height?: ?number,
  minWidth?: ?number,
  minHeight?: ?number,
  maxWidth?: ?number,
  maxHeight?: ?number,
  justifyContent?: Yoga$JustifyContent,
  padding: PositionRecordT,
  border: PositionRecordT,
  margin: PositionRecordT,
  position: PositionRecordT,
  positionType: Yoga$PositionType,
  alignItems?: Yoga$Align,
  alignSelf?: Yoga$Align,
  alignContent?: Yoga$Align,
  flexDirection?: Yoga$FlexDirection,
  flexBasis?: number | 'auto',
  flexGrow?: number,
  flexShrink?: number,
  padding?: number,
  flexWrap?: Yoga$FlexWrap,
  aspectRatio?: number,
  children?: List<LayoutRecordT>,
  minWidth?: number,
  maxWidth?: number,
  minHeight?: number,
  maxHeight?: number,
  borderRadius?: number,
  borderWidth?: Number,
  borderColor?: String,
  backgroundColor?: String,
  text?: String,
}>;

const r: LayoutRecordT = Record({
  width: 'auto',
  height: 'auto',
  minWidth: 0,
  minHeight: 0,
  maxWidth: 'none',
  maxHeight: 'none',
  justifyContent: yoga.JUSTIFY_FLEX_START,
  alignItems: yoga.ALIGN_STRETCH,
  alignSelf: yoga.ALIGN_AUTO,
  alignContent: yoga.ALIGN_STRETCH,
  flexDirection: yoga.FLEX_DIRECTION_ROW,
  padding: PositionRecord(),
  margin: PositionRecord(),
  border: PositionRecord(),
  position: PositionRecord({
    left: NaN,
    top: NaN,
    right: NaN,
    bottom: NaN,
  }),
  positionType: yoga.POSITION_TYPE_RELATIVE,
  flexWrap: yoga.WRAP_NO_WRAP,
  flexBasis: 'auto',
  flexGrow: 0,
  flexShrink: 1,
  children: List(),
  aspectRatio: 'auto',
  minWidth: NaN,
  maxWidth: NaN,
  minHeight: NaN,
  maxHeight: NaN,
  borderRadius: 0,
  borderWidth: 1,
  borderColor: 'rgb(48 56 69 / 20%)',
  backgroundColor: '#fff',
  text: undefined,
});

export default r;
