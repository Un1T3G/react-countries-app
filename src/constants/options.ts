interface IOption {
  value?: string
  label: string
}

export const options: IOption[] = [
  {
    value: undefined,
    label: 'None',
  },
  {
    value: 'africa',
    label: 'Africa',
  },
  {
    value: 'americas',
    label: 'Americas',
  },
  {
    value: 'asia',
    label: 'Asia',
  },
  {
    value: 'europe',
    label: 'Europe',
  },
  {
    value: 'oceania',
    label: 'Oceania',
  },
]
