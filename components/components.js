import styled from 'styled-components'

import rebass from 'rebass'

import atoms from './atoms'
import molecules from './molecules'
import organisms from './organisms'

import BarChart from './charts/BarChart'
import PieChart from './charts/PieChart'

/* OONI produced atoms */

export const Button = atoms.Button
export const Input = atoms.Input
export const RadioButton = atoms.RadioButton
export const RadioGroup = atoms.RadioGroup
export const TwitterShareButton = atoms.TwitterShareButton
export const FacebookShareButton = atoms.FacebookShareButton
export const Heading = atoms.Heading
export const Text = atoms.Text
export const Select = atoms.Select

/* OONI produced molecules */
export const InputWithIconButton = molecules.InputWithIconButton
export const LogoOONIRun = molecules.LogoOONIRun
export const Card = molecules.Card

/* OONI produced organisms */
export const Hero = organisms.Hero
export const HeroLead = organisms.HeroLead
export const Modal = organisms.Modal

/* Here we just export rebass until we implement all of these */
export const Absolute = rebass.Absolute
export const Arrow = rebass.Arrow
export const Avatar = rebass.Avatar
export const BackgroundImage = rebass.BackgroundImage
export const Badge = rebass.Badge
export const Banner = rebass.Banner
export const BlockLink = rebass.BlockLink
export const Blockquote = rebass.Blockquote
export const Border = rebass.Border
export const ButtonCircle = rebass.ButtonCircle
export const ButtonOutline = rebass.ButtonOutline
export const ButtonTransparent = rebass.ButtonTransparent
export const Carousel = rebass.Carousel
export const CarouselSlide = rebass.CarouselSlide
export const Checkbox = rebass.Checkbox
export const Circle = rebass.Circle
export const Close = rebass.Close
export const Code = rebass.Code
export const Column = rebass.Column
export const Container = rebass.Container
export const Divider = rebass.Divider
export const Donut = rebass.Donut
export const DotButton = rebass.DotButton
export const Drawer = rebass.Drawer
export const Embed = rebass.Embed
export const Fixed = rebass.Fixed
export const Group = rebass.Group
export const Image = rebass.Image
export const Label = rebass.Label
export const Lead = rebass.Lead
export const Link = rebass.Link
export const Measure = rebass.Measure
export const Media = rebass.Media
export const Message = rebass.Message
export const NavLink = rebass.NavLink
export const Overlay = rebass.Overlay
export const Panel = rebass.Panel
export const PanelFooter = rebass.PanelFooter
export const PanelHeader = rebass.PanelHeader
export const Pre = rebass.Pre
export const Progress = rebass.Progress
export const Radio = rebass.Radio
export const Relative = rebass.Relative
export const Row = rebass.Row
export const Samp = rebass.Samp
export const ScrollCarousel = rebass.ScrollCarousel
export const Slider = rebass.Slider
export const Small = rebass.Small
export const Star = rebass.Star
export const Sticky = rebass.Sticky
export const Subhead = rebass.Subhead
export const Switch = rebass.Switch
export const TabItem = rebass.TabItem
export const Tabs = rebass.Tabs
export const Textarea = rebass.Textarea
export const Toolbar = rebass.Toolbar
export const Tooltip = rebass.Tooltip
export const Truncate = rebass.Truncate

export { default as BarChart } from './charts/BarChart'
export { default as PieChart } from './charts/PieChart'

const components = {
  Button,
  ButtonOutline,
  ButtonCircle,
  ButtonTransparent,
  Link,
  NavLink,
  BlockLink,
  Heading,
  Subhead,
  Text,
  Small,
  Lead,
  Pre,
  Code,
  Samp,
  Blockquote,
  Measure,
  Truncate,
  Label,
  Input,
  Select,
  Textarea,
  Checkbox,
  Radio,
  Slider,
  Image,
  Avatar,
  BackgroundImage,
  Container,
  Divider,
  Border,
  Media,
  Card,
  Banner,
  Panel,
  PanelHeader,
  PanelFooter,
  Progress,
  Message,
  Group,
  Toolbar,
  Badge,
  Circle,
  Tabs,
  TabItem,
  DotButton,
  Close,
  Relative,
  Absolute,
  Fixed,
  Sticky,
  Drawer,
  Overlay,
  Carousel,
  ScrollCarousel,
  CarouselSlide,
  Tooltip,
  Switch,
  Arrow,
  Star,
  Embed,
  Donut,
  Row,
  Column,
  RadioButton,
  RadioGroup,
  InputWithIconButton,
  HeroLead,
  Hero,
  LogoOONIRun,
  TwitterShareButton,
  FacebookShareButton,
  Modal,
  BarChart,
  PieChart,
}

export default components
