import { useEffect, useState } from 'react'
import { useI18n } from '../lib/i18n'

export default function Home() {
  const [courses, setCourses] = useState([])
  const { t } = useI18n()
  const [mounted, setMounted] = useState(false) // 1. 마운트 상태 추가

  useEffect(() => {
    setMounted(true) // 2. 브라우저에 접속 완료 시 true로 변경
    fetch('/api/courses')
      .then(r => r.json())
      .then(d => setCourses(d.courses || []))
  }, [])

  // 3. 마운트되기 전에는 아무것도 그리지 않음 (에러 방지 핵심)
  if (!mounted) return null

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>{t('title')}</h1>
      <p>{t('desc')}</p>

      <h2>{t('courses')}</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  )
}
      </ul>
    </div>
  )
}
