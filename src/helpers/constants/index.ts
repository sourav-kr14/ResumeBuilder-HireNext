import dynamic from 'next/dynamic';
import { IThemeColor, ITemplate } from './index.interface';

export const SYSTEM_COLORS: IThemeColor[] = [
  {
    backgroundColor: 'white',
    fontColor: 'black',
    titleColor: '#1890ff',
    highlighterColor: 'yellowgreen',
    id: 1,
  },
  {
    backgroundColor: 'white',
    fontColor: '#780650',
    titleColor: '#254000',
    highlighterColor: 'burlywood',
    id: 2,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#000000',
    titleColor: '#217503',
    highlighterColor: '#F556E5',
    id: 3,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#0F828C',
    titleColor: '#065084',
    highlighterColor: '#78B9B5',
    id: 4,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#00635d',
    titleColor: '#08a4bd',
    highlighterColor: '#8ac6d0',
    id: 5,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#006daa',
    titleColor: '#003559',
    highlighterColor: '#a6e1fa',
    id: 6,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#554971',
    titleColor: '#7d8570',
    highlighterColor: '#23b5d3',
    id: 7,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#f4f4ed',
    titleColor: '#92828d',
    highlighterColor: '#188fa7',
    id: 8,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#7f557d',
    titleColor: '#70d6ff',
    highlighterColor: '#252422',
    id: 9,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#b5e48c',
    titleColor: '#007ea7',
    highlighterColor: '#b7c0ee',
    id: 10,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#fdca40',
    titleColor: '#87f1ff',
    highlighterColor: '#6eeb83',
    id: 11,
  },
  {
    backgroundColor: 'white',
    fontColor: '#7ddf64',
    titleColor: '#f42272',
    highlighterColor: '#5c9ead',
    id: 12,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#624F82',
    titleColor: '#9F73AB',
    highlighterColor: '#A3C7D6',
    id: 13,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#395B64',
    titleColor: '#A5C9CA',
    highlighterColor: '#E7F6F2',
    id: 14,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#0F3460',
    titleColor: '#533483',
    highlighterColor: '#E94560',
    id: 15,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#3F4E4F',
    titleColor: '#A27B5C',
    highlighterColor: '#DCD7C9',
    id: 16,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#2D4263',
    titleColor: '#C84B31',
    highlighterColor: '#ECDBBA',
    id: 17,
  },
  {
    backgroundColor: '0F0E0E',
    fontColor: '#541212',
    titleColor: '#8B9A46',
    highlighterColor: '#EEEEEE',
    id: 18,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#5C3D2E',
    titleColor: '#B85C38',
    highlighterColor: '#E0C097',
    id: 19,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#0F044C',
    titleColor: '#141E61',
    highlighterColor: '#787A91',
    id: 20,
  },
];

export const AVAILABLE_TEMPLATES: ITemplate = {
  modern: {
    id: 'modern',
    name: 'Modern Resume',
    thumbnail: '/templates/modern.png',
    component: dynamic(() => import('@/templates/modern/MordernTemplate'), {
      ssr: false,
    }),
  },
  professional: {
    id: 'professional',
    name: 'Professional Resume',
    thumbnail: '/templates/professional.png',
    component: dynamic(() => import('@/templates/professional/ProfessionalTemplate'), {
      ssr: false,
    }),
  },
  executive: {
    id: 'executive',
    name: 'Executive Resume',
    thumbnail: '/templates/executive.png',
    component: dynamic(() => import('@/templates/executive/ExecutiveTemplate'), {
      ssr: false,
    }),
  },
  compact: {
    id: 'compact',
    name: 'Compact Resume',
    thumbnail: '/templates/compact.png',
    component: dynamic(() => import('@/templates/compact/CompactTemplate')),
  },
  elegant: {
    id: 'elegant',
    name: 'Elegant Resume',
    thumbnail: '/templates/elegant.png',
    component: dynamic(() => import('@/templates/elegant/ElegantTemplate')),
  },
  contemporary: {
    id: 'contemporary',
    name: ' Contemporary Resume',
    thumbnail: '/templates/contemporary.png',
    component: dynamic(() => import('@/templates/contemporary/ContemporaryTemplate')),
  },
  navy: {
    id: 'navy',
    name: ' Navy Resume',
    thumbnail: '/templates/navy.png',
    component: dynamic(() => import('@/templates/navy/NavyTemplate')),
  },
};

export const CUSTOM_THEME_COLOR: IThemeColor = {
  backgroundColor: 'white',
  fontColor: 'black',
  titleColor: 'green',
  highlighterColor: '#ff7875',
  id: 4,
};

export const DATE_PICKER_FORMAT = 'DD/MM/YYYY';
