type SectionTitleProps = {
  title: string
  className?: string
}

const SectionTitle = ({ title, className = '' }: SectionTitleProps) => {
  return (
    <div className={`mb-10 ${className}`}>
      <h2 className="text-5xl font-serif font-semibold text-black">{title}</h2>
      {/* <hr className="mt-4 border-t border-gray-700 w-full" /> */}
    </div>
  )
}

export default SectionTitle
