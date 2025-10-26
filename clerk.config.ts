import type { ClerkProviderOptions } from '@clerk/nextjs'

export const clerkConfig: ClerkProviderOptions = {
  appearance: {
    elements: {
      formFieldInput: {
        backgroundColor: 'white',
        borderColor: '#e5e5e5',
        '&:focus': {
          borderColor: '#6366f1',
          outline: 'none',
          boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.2)'
        }
      },
      card: {
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
      },
      headerTitle: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#1f2937'
      },
      headerSubtitle: {
        color: '#6b7280'
      }
    },
    variables: {
      colorPrimary: '#6366f1',
      colorText: '#1f2937',
      colorTextSecondary: '#6b7280',
      borderRadius: '8px'
    }
  }
}