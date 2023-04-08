export const cn = (
  className: string | any,
  ...args: (string | undefined)[]
) => {
  return [className, ...args.filter((e) => !!e)].join(' ')
}
