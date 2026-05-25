interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Spectral Mamba',
    description: `A rigorous spectral audit of VM-UNet (Visual Mamba) against Swin-Tiny and UNet-ResNet50 on dermatological image segmentation. Explores the Alias Violation Ratio (AVR) and disproves the Spectral Debt hypothesis, unmasking a dual-stage spectral fingerprint.`,
    href: '/projects/spectral-mamba',
  },
  {
    title: '3D Anti-Aliasing (MIDL 2026)',
    description: `Evaluates the spatial-spectral trade-off of 3D BlurPool anti-aliasing in a volumetric SegResNet operating natively on the BraTS 2021 clinical MRI dataset. Proves that anti-aliasing collapses shift consistency and blurs sharp boundaries.`,
    href: '/projects/anti-aliasing',
  },
]

export default projectsData
